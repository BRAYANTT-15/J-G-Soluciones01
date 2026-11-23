import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronLeft, ChevronRight, Clock3, Hammer, House, Lightbulb, Menu, Paintbrush, Phone, ShieldCheck, Sparkles, Wrench, X, Zap, Droplets, MapPin } from 'lucide-react';
import { projects } from './projects.js';
import './styles.css';

const WA = 'https://wa.me/18299753029';
const services = [
  { icon: Paintbrush, title: 'Decoración', text: 'Renovamos la personalidad de tus espacios con detalles que se sienten como hogar.' },
  { icon: Zap, title: 'Electricidad', text: 'Instalaciones, mejoras y reparaciones eléctricas hechas con atención y cuidado.' },
  { icon: Droplets, title: 'Plomería', text: 'Soluciones prácticas para tuberías, grifería, filtraciones y más.' },
  { icon: Wrench, title: 'Mantenimiento', text: 'Reparaciones y trabajos cotidianos para que todo en casa funcione bien.' },
  { icon: House, title: 'Remodelaciones', text: 'Damos nueva vida a tus ambientes, desde pequeños cambios hasta una renovación.' },
  { icon: Hammer, title: 'Otros servicios', text: 'Cuéntanos qué necesitas. Buscamos la solución adecuada para tu hogar.' },
];
const categories = ['Todos', 'Decoración', 'Electricidad', 'Plomería', 'Remodelaciones', 'Mantenimiento'];
const imageUrl = path => path;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const visibleProjects = projects.filter(p => p.type === expandedCategory);
  const closeMenu = () => setMenuOpen(false);
  const openWhatsApp = (message = 'Hola, estoy interesado en solicitar información sobre sus servicios') => window.open(`${WA}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = `Hola, quiero solicitar una cotización.\n\nNombre: ${data.get('name')}\nTeléfono: ${data.get('phone')}\nServicio: ${data.get('service')}\nDetalles: ${data.get('details')}`;
    setSubmitted(true);
    window.open(`${WA}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };
  return <>
    <div className="topline"><span>Servicios para el hogar con atención en Santo Domingo</span><span className="top-location"><MapPin size={13}/> Santo Domingo, República Dominicana</span></div>
    <header className="header"><a className="brand" href="#inicio" aria-label="J&G Soluciones, inicio" onClick={closeMenu}><img src="/logo-transparent.png" alt="J&G Soluciones"/><span className="brand-copy"><b>J&G <i>Soluciones</i></b><small>HOGAR · DISEÑO · SERVICIO</small></span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegación principal"><a href="#inicio" onClick={closeMenu}>Inicio</a><a href="#servicios" onClick={closeMenu}>Servicios</a><a href="#nosotros" onClick={closeMenu}>Nosotros</a><a href="#proyectos" onClick={closeMenu}>Proyectos</a><a href="#contacto" onClick={closeMenu}>Contacto</a><a className="nav-cta" href="#contacto" onClick={closeMenu}>Solicitar cotización <ArrowUpRight size={15}/></a></nav>
    </header>
    <main>
      <section className="hero" id="inicio"><div className="hero-photo"/><div className="hero-shade"/><div className="hero-content"><div className="eyebrow light"><span/> CUIDAMOS CADA DETALLE</div><h1>Tu hogar merece<br/>sentirse <em>extraordinario.</em></h1><p>Ideas que toman forma. Soluciones hechas con cuidado. Estamos aquí para transformar tus espacios y hacer tu día a día más fácil.</p><div className="hero-actions"><a className="button button-blue" href="#servicios">Conoce nuestros servicios <ArrowRight size={17}/></a><button className="button button-outline" onClick={() => openWhatsApp()}>Cotiza por WhatsApp <ArrowUpRight size={16}/></button></div><div className="hero-bottom"><span><ShieldCheck size={17}/> Atención cercana y responsable</span><a href="#servicios">DESCUBRE LO QUE HACEMOS <ArrowDown size={14}/></a></div></div></section>
      <section className="intro section-wrap"><div className="intro-label"><span>01 / NUESTRA ESENCIA</span><span className="gold-line"/></div><div className="intro-main"><h2>Un buen hogar cambia<br/>la forma en que <em>vives.</em></h2><p>Ese rincón que imaginas, la reparación que no puede esperar, el cambio que llevas tiempo pensando. En J&G Soluciones, hacemos que cuidar tu hogar sea más sencillo.</p><a className="text-link" href="#nosotros">Conoce quiénes somos <ArrowRight size={16}/></a></div><div className="intro-stat"><Sparkles/><b>Tu espacio,<br/>a tu manera.</b><span>Un equipo atento a lo que de verdad necesitas.</span></div></section>
      <section className="services-section" id="servicios"><div className="section-wrap"><div className="section-heading"><div><div className="eyebrow"><span/> LO QUE HACEMOS</div><h2>Soluciones para cada<br/><em>rincón de tu hogar.</em></h2></div><p>Un solo lugar para las ideas y tareas que hacen de tu casa un espacio mejor.</p></div><div className="services-grid">{services.map((s,i) => <article className="service-card" key={s.title}><div className="card-top"><span className="service-icon"><s.icon size={21}/></span><span className="card-index">0{i+1}</span></div><h3>{s.title}</h3><p>{s.text}</p><button onClick={() => openWhatsApp(`Hola, me interesa solicitar un servicio de ${s.title.toLowerCase()}.`)} className="card-link">Solicitar servicio <ArrowUpRight size={15}/></button></article>)}</div></div></section>
      <section className="about section-wrap" id="nosotros"><div className="about-visual founder-visual"><img src={imageUrl('/images/gregory-guzman-founder.webp')} alt="Gregory Guzmán, fundador de J&G Soluciones" loading="lazy"/><div className="about-stamp founder-stamp"><small>FUNDADOR</small><b>Gregory Guzmán</b></div><span className="image-caption">LIDERANDO CON CERCANÍA Y COMPROMISO</span></div><div className="about-copy"><div className="eyebrow"><span/> UN POCO SOBRE NOSOTROS</div><h2>Hacemos espacio<br/>para <em>lo que importa.</em></h2><p>Somos un emprendimiento dedicado a ofrecer soluciones para el hogar en mantenimiento, decoración, instalaciones y remodelaciones.</p><p>Gregory Guzmán, fundador de J&G Soluciones, cree en escuchar cada necesidad y cuidar los detalles para que cada espacio se sienta más tuyo.</p><div className="about-points"><span><Check/> Atención personalizada</span><span><Check/> Cuidado en cada detalle</span><span><Check/> Soluciones pensadas para ti</span></div><a href="#contacto" className="button button-dark">Hablemos de tu proyecto <ArrowRight size={16}/></a></div></section>
      <section className="projects-section" id="proyectos">
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
                <div className={`category-gallery-accordion ${isExpanded ? 'is-open' : ''}`} id={galleryId} aria-hidden={!isExpanded} inert={!isExpanded}>
                  <div className="category-gallery-inner">
                    <div className="gallery category-gallery-grid">
                      {categoryProjects.map(project => <button className="gallery-item" key={project.name} onClick={() => setActiveImage(project)} aria-label={`Ampliar imagen: ${project.name}`}><img src={imageUrl(project.image)} alt={`${project.name}, trabajo de ${project.type.toLowerCase()}`} loading="lazy"/><span className="gallery-overlay"><span><small>{project.type.toUpperCase()}</small><b>{project.name}</b></span><i><ArrowUpRight size={19}/></i></span></button>)}
                    </div>
                  </div>
                </div>
              </article>;
            })}
          </div>
          <div className="gallery-caption"><span>Fotos compartidas por J&G Soluciones, clasificadas por servicio.</span><a href="#contacto">¿Tienes algo en mente? <ArrowRight size={15}/></a></div>
        </div>
      </section>
      <section className="contact-section" id="contacto"><div className="section-wrap contact-layout"><div className="contact-copy"><div className="eyebrow"><span/> EMPECEMOS POR AQUÍ</div><h2>Tu próximo proyecto<br/>empieza con <em>un hola.</em></h2><p>Cuéntanos qué tienes en mente. Conversamos contigo y buscamos una solución para tu hogar.</p><div className="contact-details"><div><span className="detail-icon"><Phone size={17}/></span><span><small>WHATSAPP</small><b>829-975-3029</b></span></div><div><span className="detail-icon"><MapPin size={17}/></span><span><small>UBICACIÓN</small><b>Santo Domingo, República Dominicana</b></span></div><div><span className="detail-icon"><Clock3 size={17}/></span><span><small>ATENCIÓN</small><b>Escríbenos cuando quieras</b></span></div></div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><div><small>HABLEMOS DE TU ESPACIO</small><h3>Solicita tu cotización</h3></div><span><ArrowDown/></span></div><label>Tu nombre<input required name="name" autoComplete="name" placeholder="¿Cómo te llamas?"/></label><div className="form-row"><label>Teléfono<input required name="phone" type="tel" autoComplete="tel" placeholder="829 000 0000"/></label><label>¿Qué necesitas?<span className="select-wrap"><select required name="service" defaultValue=""><option value="" disabled>Selecciona un servicio</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select><ChevronDown/></span></label></div><label>Cuéntanos un poco más<textarea required name="details" rows="3" placeholder="Describe brevemente el trabajo que necesitas..."></textarea></label><button className="button button-blue form-submit" type="submit">{submitted ? 'Abrir WhatsApp de nuevo' : 'Continuar por WhatsApp'} <ArrowUpRight size={17}/></button><small className="privacy-note">Al continuar, tus datos se incluyen en un mensaje de WhatsApp. No guardamos la información.</small></form></div></section>
      <section className="closing"><div className="section-wrap closing-inner"><div><span className="eyebrow light"><span/> EL CUIDADO QUE TU HOGAR MERECE</span><h2>Transformamos tus espacios.<br/><em>Solucionamos tus necesidades.</em></h2></div><button onClick={()=>openWhatsApp()} className="button button-gold">Escríbenos por WhatsApp <ArrowUpRight size={17}/></button></div></section>
    </main>
    <footer className="footer"><div className="section-wrap"><div className="footer-main"><div className="footer-brand"><a className="brand" href="#inicio"><img src="/logo-transparent.png" alt=""/><span className="brand-copy"><b>J&G <i>Soluciones</i></b><small>HOGAR · DISEÑO · SERVICIO</small></span></a><p>Pequeños detalles, grandes cambios.<br/>Estamos para ayudarte a sentirte mejor en casa.</p></div><div className="footer-col"><b>EXPLORA</b><a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#proyectos">Proyectos</a></div><div className="footer-col"><b>SERVICIOS</b>{services.slice(0,4).map(s=><a href="#servicios" key={s.title}>{s.title}</a>)}</div><div className="footer-contact"><b>HABLEMOS</b><a href={WA} target="_blank" rel="noreferrer">829-975-3029 <ArrowUpRight size={14}/></a><span>Santo Domingo, República Dominicana</span><span className="footer-tag"><MapPin size={14}/> Cerca de ti, al servicio de tu hogar.</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} J&G Soluciones. Todos los derechos reservados.</span><a href="#inicio">Transformamos tus espacios, solucionamos tus necesidades.</a></div></div></footer>
    <button className="whatsapp-float" onClick={()=>openWhatsApp()} aria-label="Contactar a J&G Soluciones por WhatsApp"><span className="wa-icon">◉</span><span>¿Hablamos?</span></button>
    {activeImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Vista ampliada de la galería" onClick={()=>setActiveImage(null)}><button className="lightbox-close" onClick={()=>setActiveImage(null)} aria-label="Cerrar imagen"><X/></button><button className="lightbox-arrow left" aria-label="Imagen anterior" onClick={e=>{e.stopPropagation();const i=visibleProjects.indexOf(activeImage);setActiveImage(visibleProjects[(i-1+visibleProjects.length)%visibleProjects.length]);}}><ChevronLeft/></button><img src={imageUrl(activeImage.image, 1800)} alt={`${activeImage.name}, fotografía de ${activeImage.type.toLowerCase()}`}/><button className="lightbox-arrow right" aria-label="Imagen siguiente" onClick={e=>{e.stopPropagation();const i=visibleProjects.indexOf(activeImage);setActiveImage(visibleProjects[(i+1)%visibleProjects.length]);}}><ChevronRight/></button><div className="lightbox-caption">{activeImage.type} · {activeImage.name}</div></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
