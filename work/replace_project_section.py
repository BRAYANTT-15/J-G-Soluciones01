from pathlib import Path
import re

path = Path("src/main.jsx")
source = path.read_text(encoding="utf-8")
replacement = '''      <section className="projects-section" id="proyectos">
        <div className="section-wrap">
          <div className="projects-heading">
            <div>
              <div className="eyebrow light"><span/> INSPIRACIÓN PARA TU HOGAR</div>
              <h2>Ideas que se sienten<br/><em>como en casa.</em></h2>
            </div>
            <p>Una selección de trabajos compartidos por J&G Soluciones, agrupados por tipo de servicio.<br/><small>144 fotos reales de trabajos de decoración, instalaciones y remodelación.</small></p>
          </div>
          <div className="project-accordions">
            {categories.slice(1).map((category, index) => {
              const categoryProjects = projects.filter(project => project.type === category);
              const cover = categoryProjects[0];
              const isExpanded = expandedCategory === category;
              const galleryId = `project-gallery-${index}`;
              return <article className={`project-category ${isExpanded ? 'expanded' : ''}`} key={category}>
                <button className="project-category-toggle" type="button" aria-expanded={isExpanded} aria-controls={galleryId} onClick={() => setExpandedCategory(isExpanded ? null : category)}>
                  {cover && <img className="category-cover" src={imageUrl(cover.image)} alt={`Foto de portada: ${category}`} loading="lazy"/>}
                  <span className="category-card-shade"/>
                  <span className="category-card-copy"><small>PROYECTOS J&G</small><b>{category}</b><span>{categoryProjects.length} fotos</span></span>
                  <ChevronDown className="category-chevron" size={23}/>
                </button>
                <div className="gallery category-gallery" id={galleryId} hidden={!isExpanded}>
                  {categoryProjects.map(project => <button className="gallery-item" key={project.name} onClick={() => setActiveImage(project)} aria-label={`Ampliar imagen: ${project.name}`}><img src={imageUrl(project.image)} alt={`${project.name}, trabajo de ${project.type.toLowerCase()}`} loading="lazy"/><span className="gallery-overlay"><span><small>{project.type.toUpperCase()}</small><b>{project.name}</b></span><i><ArrowUpRight size={19}/></i></span></button>)}
                </div>
              </article>;
            })}
          </div>
          <div className="gallery-caption"><span>Fotos compartidas por J&G Soluciones, clasificadas por servicio.</span><a href="#contacto">¿Tienes algo en mente? <ArrowRight size={15}/></a></div>
        </div>
      </section>'''
replacement = replacement.replace("\n+", "\n")
pattern = r"      <section className=\"projects-section\".*?</section>"
updated, count = re.subn(pattern, lambda _: replacement, source, count=1, flags=re.DOTALL)
if count != 1:
    raise SystemExit(f"Secciones de proyectos encontradas: {count}; no se hicieron cambios")
path.write_text(updated, encoding="utf-8")
print("Sección de proyectos convertida a acordeón por categoría")
