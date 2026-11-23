
    window.__previewErrors = [];
    window.addEventListener('error',e=>window.__previewErrors.push({message:e.message,source:e.filename,line:e.lineno}));
    window.addEventListener('unhandledrejection',e=>window.__previewErrors.push({message:String(e.reason)}));
    const WA = 'https://wa.me/18298023028?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios';
    const services = [
      ['01','Decoración','Ideas, materiales y detalles para transformar cada ambiente.','Decoración'],
      ['02','Electricidad','Instalaciones y mejoras eléctricas para tu hogar.','Electricidad'],
      ['03','Plomería','Soluciones para baños, cocinas, grifería y tuberías.','Plomería'],
      ['04','Remodelaciones','Renovamos tus espacios con atención en cada etapa.','Remodelaciones'],
      ['05','Mantenimiento','Reparaciones y cuidado de equipos y espacios.','Mantenimiento'],
      ['06','Otros servicios','Cuéntanos qué necesitas resolver en casa.','Otros servicios']
    ];
    const works = [
      ['Remodelación interior','Decoración','/images/portfolio/jv-photo-034.webp'],
      ['Baño renovado','Plomería','/images/portfolio/jv-photo-066.webp'],
      ['Luminaria decorativa','Electricidad','/images/portfolio/jv-photo-085.webp'],
      ['Paneles y acabados','Remodelaciones','/images/portfolio/jv-photo-018.webp'],
      ['Área de piscina','Mantenimiento','/images/portfolio/jv-photo-099.webp'],
      ['Instalación de tablero','Electricidad','/images/portfolio/jv-photo-143.webp']
    ];
    const stage = document.getElementById('stage');
    const picker = document.querySelector('.proto-picker');
    const highlight = picker.querySelector('.proto-picker-highlight');
    const items = [...picker.querySelectorAll('.proto-picker-item:not(.proto-picker-replay)')];
    const replay = picker.querySelector('.proto-picker-replay');
    let current = 0;
    function renderSite(theme) {
      const casa = theme === 'casa';
      const tecnico = theme === 'tecnico';
      const editorial = theme === 'editorial';
      const headline = casa ? 'Tu hogar merece sentirse <em>extraordinario.</em>' : tecnico ? 'Soluciones precisas para cada <em>espacio.</em>' : 'Un hogar que refleja <em>lo que importa.</em>';
      const heroText = casa ? 'Ideas que toman forma. Soluciones hechas con cuidado. Estamos aquí para transformar tus espacios y hacer tu día a día más fácil.' : tecnico ? 'Instalaciones, mantenimiento y remodelaciones para que cada espacio funcione como debe.' : 'Cuidamos los detalles que convierten una casa en el lugar al que siempre quieres volver.';
      const photo = editorial ? '/images/portfolio/jv-photo-066.webp' : '/images/portfolio/jv-photo-034.webp';
      const serviceCards = services.map(([n,title,copy,type]) => '<article class="service-card"><span class="number">'+n+' / '+type.toUpperCase()+'</span><h3>'+title+'</h3><p>'+copy+'</p><a href="'+WA+'" target="_blank" rel="noreferrer">Solicitar servicio ↗</a></article>').join('');
      const workCards = works.map(([title,type,image]) => '<a class="work-card" data-service="'+type+'" href="'+image+'" target="_blank" rel="noreferrer" aria-label="Ampliar '+title+'"><img loading="lazy" src="'+image+'" alt="'+title+'"><span class="work-copy"><small>'+type+'</small><b>'+title+'</b></span></a>').join('');
      return '<div class="site '+theme+'">'+
        '<header class="site-header"><a class="brand" href="#inicio" aria-label="J&V Soluciones, inicio"><img src="/logo-transparent.png" alt=""><strong>J&V <span>Soluciones</span></strong></a><button class="menu-toggle" data-menu-toggle aria-label="Abrir menú">☰</button><nav class="site-nav"><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#proyectos">Proyectos</a><a href="#contacto">Contacto</a><a class="nav-cta" href="'+WA+'" target="_blank" rel="noreferrer">Solicitar cotización ↗</a></nav></header>'+
        '<section class="hero" id="inicio"><div class="hero-copy entry"><span class="kicker">J&V SOLUCIONES · SANTO DOMINGO</span><h1>'+headline+'</h1><p>'+heroText+'</p><div class="actions"><a class="action" href="#servicios">Explorar servicios <span>→</span></a><a class="action secondary" href="'+WA+'" target="_blank" rel="noreferrer">Cotizar por WhatsApp ↗</a></div><div class="trust-row"><span>Atención cercana</span><span>Soluciones para tu hogar</span></div></div><div class="hero-photo entry"><img src="'+photo+'" alt="'+(editorial?'Baño renovado con acabados claros':'Interior remodelado con iluminación y acabados en madera')+'"><span class="hero-photo-caption">Trabajo real · J&V Soluciones</span></div></section>'+
        '<div class="intro"><small>UNA CASA, MUCHAS POSIBILIDADES</small><strong>Transformamos tus espacios.<br>Solucionamos tus necesidades.</strong></div>'+
        '<section class="section" id="servicios"><div class="section-head"><div><span class="kicker">LO QUE HACEMOS</span><h2>Soluciones para cada rincón.</h2></div><p>Un solo equipo para las ideas y tareas que hacen de tu casa un espacio mejor.</p></div><div class="services-grid">'+serviceCards+'</div></section>'+
        '<section class="section work-section" id="proyectos"><div class="section-head"><div><span class="kicker">TRABAJOS REALES</span><h2>Hechos para vivirlos.</h2></div><p>Algunas imágenes de decoración, instalaciones, baños, remodelaciones y mantenimiento.</p></div><div class="filter-row" role="group" aria-label="Filtrar trabajos"><button data-filter="Todos" aria-pressed="true">Todos</button><button data-filter="Decoración" aria-pressed="false">Decoración</button><button data-filter="Electricidad" aria-pressed="false">Electricidad</button><button data-filter="Plomería" aria-pressed="false">Plomería</button><button data-filter="Remodelaciones" aria-pressed="false">Remodelaciones</button><button data-filter="Mantenimiento" aria-pressed="false">Mantenimiento</button></div><div class="work-grid">'+workCards+'</div></section>'+
        '<section class="section about" id="nosotros"><div class="about-photo"><img loading="lazy" src="/images/portfolio/jv-photo-067.webp" alt="Baño remodelado con ducha y lavamanos"></div><div class="about-copy"><span class="kicker">CONOCE J&V SOLUCIONES</span><h2>Hacemos espacio para <em>lo que importa.</em></h2><p>Somos un emprendimiento dedicado a ofrecer soluciones para el hogar en mantenimiento, decoración, instalaciones y remodelaciones.</p><p>Escuchamos lo que necesitas y cuidamos el proceso para que cada espacio se sienta más tuyo.</p><a class="action" href="#contacto">Hablemos de tu proyecto →</a></div></section>'+
        '<section class="closing" id="contacto"><h2>¿Necesitas una solución para tu hogar?</h2><a class="action" href="'+WA+'" target="_blank" rel="noreferrer">Escríbenos por WhatsApp ↗</a></section>'+
        '<footer class="site-footer"><strong>J&V Soluciones</strong><small>Santo Domingo, República Dominicana · 829-802-3028</small><small>Transformamos tus espacios, solucionamos tus necesidades.</small></footer>'+
        '</div>';
    }
    const variants = [
      () => renderSite('casa'),
      () => renderSite('tecnico'),
      () => renderSite('editorial')
    ];
    function moveHighlight() {
      const el = items[current];
      highlight.style.width = el.offsetWidth + 'px';
      highlight.style.transform = 'translateX(' + el.offsetLeft + 'px)';
    }
    function mount(i) {
      stage.innerHTML = '';
      requestAnimationFrame(() => { stage.innerHTML = variants[i](); window.scrollTo(0,0); });
    }
    function setActive(i) {
      if (i < 0 || i >= variants.length) return;
      current = i;
      items.forEach((el,j) => {
        el.toggleAttribute('data-active',j===i);
        if (j===i) el.setAttribute('aria-current','true');
        else el.removeAttribute('aria-current');
      });
      moveHighlight();
      const url = new URL(location);
      url.searchParams.set('v',i+1);
      history.replaceState(null,'',url);
      document.title = ['Casa cálida','Técnico contemporáneo','Editorial premium'][i] + ' | J&V Soluciones';
      mount(i);
    }
    items.forEach((el,i) => el.addEventListener('click',() => setActive(i)));
    replay?.addEventListener('click',() => mount(current));
    window.addEventListener('resize',moveHighlight);
    stage.addEventListener('click',e => {
      const filter=e.target.closest('[data-filter]');
      if(filter){
        const selected=filter.dataset.filter;
        stage.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===filter)));
        stage.querySelectorAll('.work-card').forEach(card=>card.hidden=selected!=='Todos'&&card.dataset.service!==selected);
      }
      const menu=e.target.closest('[data-menu-toggle]');
      if(menu){
        const nav=stage.querySelector('.site-nav');const opened=nav.classList.toggle('open');
        menu.setAttribute('aria-expanded',String(opened));menu.setAttribute('aria-label',opened?'Cerrar menú':'Abrir menú');
      }
    });
    document.addEventListener('keydown',e => {
      if(/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)||e.target.isContentEditable)return;
      if(e.metaKey||e.ctrlKey||e.altKey)return;
      const num=parseInt(e.key,10);
      if(num>=1&&num<=variants.length)setActive(num-1);
      else if(e.key==='ArrowRight')setActive((current+1)%variants.length);
      else if(e.key==='ArrowLeft')setActive((current-1+variants.length)%variants.length);
      else if(e.key==='r'||e.key==='R')mount(current);
    });
    history.scrollRestoration = 'manual';
    window.scrollTo(0,0);
    setActive((parseInt(new URLSearchParams(location.search).get('v'),10)||1)-1);
    window.addEventListener('load',()=>window.scrollTo(0,0),{once:true});
    requestAnimationFrame(()=>requestAnimationFrame(()=>picker.setAttribute('data-ready','')));
  