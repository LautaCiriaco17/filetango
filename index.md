---
layout: default
title: Filetango
---

<header class="masthead">
  <div class="container text-center py-5" style="margin-top: 100px;">
    <div class="masthead-subheading mb-4" style="line-height: 1.8;">
      Mi nombre es Lautaro y te invito a que conozcas lo que hago. <br>
      La historia de este arte y que te enamores tanto como yo.
    </div>
    <div class="masthead-heading text-uppercase mb-4">Bienvenidos a Filetango
</div>
    <a class="btn btn-primary btn-xl text-uppercase" href="#services">VER MÁS</a>
  </div>
</header>


<section id="services">
  <div class="container">
    <div class="text-center">
      <h2 class="section-heading text-uppercase">Qué hacemos</h2>
      <h3 class="section-subheading text-muted">El arte tradicional llevado a lo moderno</h3>
    </div>
    <div class="row text-center">
      <div class="col-md-4">
        <span class="fa-stack fa-4x">
          <i class="fas fa-circle fa-stack-2x text-primary"></i>
          <i class="fas fa-paint-brush fa-stack-1x fa-inverse"></i>
        </span>
        <h4 class="my-3">Arte Personalizado</h4>
        <p class="text-muted">Creamos diseños únicos para carteles, objetos y letras con el clásico fileteado porteño.</p>
      </div>
      <div class="col-md-4">
        <span class="fa-stack fa-4x">
          <i class="fas fa-circle fa-stack-2x text-primary"></i>
          <i class="fas fa-store fa-stack-1x fa-inverse"></i>
        </span>
        <h4 class="my-3">Decoración de Locales</h4>
        <p class="text-muted">Transformamos fachadas, vidrieras y espacios con identidad visual única y artística.</p>
      </div>
      <div class="col-md-4">
        <span class="fa-stack fa-4x">
          <i class="fas fa-circle fa-stack-2x text-primary"></i>
          <i class="fas fa-users fa-stack-1x fa-inverse"></i>
        </span>
        <h4 class="my-3">Trabajos por Encargo</h4>
        <p class="text-muted">Hacemos trabajos a pedido. Contanos tu idea y te armamos una propuesta a medida.</p>
      </div>
    </div>
<!-- CTA WhatsApp (sección Services) -->

<!-- CTA WhatsApp (sección Services) -->

<div class="text-center" style="margin-bottom 56px;">
  <a
    href="https://wa.me/5492235192443?text=Hola%20Filetango%2C%20vengo%20del%20sitio%20y%20quiero%20hacer%20una%20consulta"
    target="_blank"
    rel="noopener noreferrer"
    class="btn-whatsapp visible"
    aria-label="Consultar por WhatsApp"
    style="display:inline-flex;align-items:center;background:#25D366;color:#fff;padding:14px 24px;border-radius:50px;font-weight:700;text-decoration:none;gap:8px;box-shadow:0 6px 18px rgba(0,0,0,.15);"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
      <path fill="white" d="M380.9 97.1C339-5.2 217.7-31.3 129 33.5 73 72.1 38.1 139 40.1 210.4c1.5 57.5 24 110.7 62.5 151.6l-16.6 61.6c-2.1 7.7 5.1 14.7 12.8 12.1l62.7-20.8c39.3 20.9 84.2 29.2 128.6 24.3 71.4-7.7 137.8-54.6 167.4-120.9 38.4-82.9 20.5-182.7-46.6-241.2z"/>
    </svg>
    Consultar por WhatsApp
  </a>
</div>

<!-- /CTA -->

<!-- === GALERÍA === -->
<section id="galeria" class="page-section section-bleed-bg">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="section-heading text-uppercase">Galería</h2>
      <h3 class="section-subheading text-muted">Algunos trabajos recientes</h3>
    </div>

  <div class="gal-grid">
      {% for item in site.data.galeria limit:6 %}
      <div class="g-item">
        <figure class="gallery-card">
          <img
            src="{{ item.image }}"
            alt="{{ item.alt | default: item.title }}"
            class="gallery-img"
            loading="lazy"
          >
          <figcaption class="gallery-caption">{{ item.title }}</figcaption>
        </figure>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- === CONTACTO === -->
<section id="contact" class="page-section">
  <div class="container text-center">
    <h2 class="section-heading text-uppercase">Contacto</h2>
    <h3 class="section-subheading text-muted">Comunicate con nosotros para encargar tu diseño.</h3>

  <div class="mt-4 d-flex justify-content-center gap-3 flex-wrap">
      <a href="https://wa.me/5492235192443" class="btn btn-success btn-xl" target="_blank" rel="noopener">
        <i class="fab fa-whatsapp"></i> WhatsApp
      </a>
      <a href="https://instagram.com/filetango" class="btn btn-dark btn-xl" target="_blank" rel="noopener">
        <i class="fab fa-instagram"></i> Instagram
      </a>
    </div>
  </div>
</section>




