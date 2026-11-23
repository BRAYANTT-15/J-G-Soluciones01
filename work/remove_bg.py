import cv2
import numpy as np
from pathlib import Path
from PIL import Image

source = Path(r"C:\Users\Esneydi\Documents\Retrato profesional de manitas con herramientas.png")
out = Path("public/images/gregory-guzman-cutout.png")
portrait = Path("public/images/gregory-guzman-founder.webp")
image = cv2.imread(str(source), cv2.IMREAD_COLOR)
if image is None:
    raise SystemExit("No se pudo abrir la fotografía fuente")

height, width = image.shape[:2]
Image.fromarray(cv2.cvtColor(image, cv2.COLOR_BGR2RGB)).save(portrait, "WEBP", quality=90, method=6)

# Keep the head, crossed arms, and upper tool belt; exclude the room backdrop.
x0, y0 = int(width * 0.035), 2
x1, y1 = int(width * 0.965), int(height * 0.79)
crop = image[y0:y1, x0:x1]
crop_height, crop_width = crop.shape[:2]
mask = np.zeros((crop_height, crop_width), np.uint8)
background_model = np.zeros((1, 65), np.float64)
foreground_model = np.zeros((1, 65), np.float64)
rectangle = (12, 8, crop_width - 24, crop_height - 16)
cv2.grabCut(crop, mask, rectangle, background_model, foreground_model, 8, cv2.GC_INIT_WITH_RECT)
alpha = np.where((mask == cv2.GC_FGD) | (mask == cv2.GC_PR_FGD), 255, 0).astype(np.uint8)
alpha = cv2.morphologyEx(alpha, cv2.MORPH_CLOSE, np.ones((13, 13), np.uint8))
count, labels, stats, _ = cv2.connectedComponentsWithStats((alpha > 0).astype(np.uint8), 8)
if count > 1:
    largest = 1 + int(np.argmax(stats[1:, cv2.CC_STAT_AREA]))
    alpha = np.where(labels == largest, 255, 0).astype(np.uint8)
contours, _ = cv2.findContours(alpha, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
alpha = np.zeros_like(alpha)
cv2.drawContours(alpha, contours, -1, 255, thickness=cv2.FILLED)
# Remove a connected patch of studio wall that GrabCut sometimes groups with the right shoulder.
wall_patch = np.array([[(602, 0), (crop_width, 0), (crop_width, 430), (720, 430), (666, 382), (642, 322), (628, 276)]], np.int32)
cv2.fillPoly(alpha, wall_patch, 0)
alpha = cv2.GaussianBlur(alpha, (3, 3), 0.5)
rgba = cv2.cvtColor(crop, cv2.COLOR_BGR2BGRA)
rgba[:, :, 3] = alpha
if not cv2.imwrite(str(out), rgba, [cv2.IMWRITE_PNG_COMPRESSION, 7]):
    raise SystemExit("No se pudo guardar el recorte transparente")
print(f"Foto completa: {width}x{height}; recorte transparente: {crop_width}x{crop_height}; archivo: {out.stat().st_size} bytes")
