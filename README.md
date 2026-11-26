# J&G Soluciones

Sitio web de **J&G Soluciones**, un emprendimiento de servicios para el hogar en Santo Domingo, República Dominicana: decoración, electricidad, plomería, mantenimiento y remodelaciones.

**Sitio en vivo:** https://j-gsoluciones.vercel.app

## Qué incluye

- Presentación de la empresa y de su fundador, Gregory Guzmán.
- Seis servicios, cada uno con un botón que abre WhatsApp con el mensaje ya escrito.
- Galería de 144 fotos reales de trabajos, agrupadas por servicio, con vista ampliada.
- Formulario de cotización que arma el mensaje y lo envía por WhatsApp (no guarda datos).
- Diseño adaptable a celular, tableta y computadora.

## Tecnología

- [React](https://react.dev) 19 y [Vite](https://vite.dev) 8
- [lucide-react](https://lucide.dev) para los íconos
- Publicado en [Vercel](https://vercel.com)

## Estructura

```
src/
  main.jsx          Página completa (secciones, formulario y galería)
  projects.js       Lista de fotos de la galería y su servicio
  styles.css        Estilos y colores del sitio
public/
  images/portfolio/ Fotos de la galería en formato WebP
  logo.png          Logo
  favicon.*         Ícono de la pestaña del navegador
index.html          Título, descripción y vista previa al compartir el enlace
```

## Ejecutar en tu computadora

Requiere Node.js 20.19 o superior (o 22.12 o superior).

```bash
npm install
npm run dev
```

Abre la dirección local que muestre Vite.

## Compilar

```bash
npm run build
```

El resultado queda en `dist/`. Esa carpeta no se sube a Git: Vercel la genera sola en cada publicación.

## Cambios frecuentes

- **Teléfono de WhatsApp:** constante `WA` al inicio de `src/main.jsx` (formato internacional, sin signos, por ejemplo `18299753029`). El número que se muestra en el contacto y el pie de página está escrito en el mismo archivo.
- **Agregar o quitar fotos:** copia la imagen WebP a `public/images/portfolio/` y añade o borra su línea en `src/projects.js`, con el nombre y el servicio (`Decoración`, `Electricidad`, `Plomería`, `Remodelaciones` o `Mantenimiento`).
- **Textos y servicios:** `src/main.jsx`.
- **Colores:** `src/styles.css`.

## Publicación

Cada cambio que se sube a la rama `main` se publica automáticamente en Vercel.

## Contacto

WhatsApp: 829-975-3029 · Santo Domingo, República Dominicana

© J&G Soluciones. Todos los derechos reservados.