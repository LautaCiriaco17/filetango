---
layout: default
title: Filetango | Fileteado Porteño
---

<header class="masthead">
  <div class="container">
    <div class="hero-inner text-center">
      <div class="masthead-subheading">
        Mi nombre es Lautaro y te invito a que conozcas lo que hago.<br>
        La historia de este arte y que te enamores tanto como yo.
      </div>

  <div class="masthead-heading text-uppercase">
        Bienvenidos a Filetango
      </div>

  <a class="btn btn-warning btn-hero text-uppercase" href="#services">
        Ver más
      </a>
    </div>
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
<div class="text-center mb-2">
  <a
    href="https://wa.me/5492235192443?text=Hola%20Filetango%2C%20vengo%20del%20sitio%20y%20quiero%20hacer%20una%20consulta"
    target="_blank"
    rel="noopener noreferrer"
    class="btn-whatsapp visible"
    aria-label="Consultar por WhatsApp"
    style="display:inline-flex;align-items:center;background:#25D366;color:#fff;padding:14px 24px;border-radius:50px;font-weight:700;text-decoration:none;gap:8px;box-shadow:0 6px 18px rgba(0,0,0,.15);"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
      <path fill="white" d="M380.9 97.1C339-5.2 217.7-31.3 129 33.5c-39.1 27.9-64.3 63-74.4 106.7-10.7 46.5-3.8 90.2 20.6 131.2L32 480l212.8-42.4c40.1 19.1 82.1 24.4 125.3 15.9 43.7-8.6 79.1-33.8 106.8-74.7C448 290.3 421.9 169 380.9 97.1zM224 400c-97 0-176-79-176-176S127 48 224 48s176 79 176 176-79 176-176 176zm101.9-121.2c-5.9-2.9-34.9-17.2-40.3-19.1-5.4-1.9-9.3-2.9-13.2 2.9-3.9 5.8-15.1 19.1-18.5 23-3.4 3.9-6.8 4.4-12.7 1.5-5.9-2.9-24.8-9.1-47.2-29.1-17.4-15.5-29.1-34.7-32.6-40.6-3.4-5.8-.4-9 2.6-12 2.7-2.7 5.9-6.8 8.8-10.2 2.9-3.4 3.9-5.8 5.9-9.7 2-3.9 1-7.3-.5-10.2-1.5-2.9-13.2-31.1-18.2-43.1-4.8-11.6-9.8-10-13.2-10.2l-11.2-.2c-3.9 0-10.2 1.5-15.4 7.3-5.2 5.8-20.2 20.3-19.9 49.5.3 29.3 20.9 58 24.1 62 3.2 3.9 41.4 63.4 100.9 89.2 59.6 25.8 59.6 17.2 70.4 16.4 10.8-1 34.9-13.9 39.9-27.3 5.1-13.4 5.1-24.9 3.5-27-1.6-2-5-3.1-10.9-6z"/>
    </svg>
    Consultar por WhatsApp </a>
</div>

</section> <!-- /#services -->

<!-- === GALERÍA === -->
<section id="galeria" class="page-section bg-light">
  <div class="container">
    <div class="text-center mb-2">
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
            loading="lazy">
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

<div class="d-flex justify-content-center gap-3 flex-wrap">
      <a href="https://wa.me/5492235192443" class="btn btn-success btn-xl" target="_blank" rel="noopener">
        <i class="fab fa-whatsapp"></i> WhatsApp
      </a>
      <a href="https://instagram.com/filetango" class="btn btn-dark btn-xl" target="_blank" rel="noopener">
        <i class="fab fa-instagram"></i> Instagram
      </a>
    </div>
  </div>
</section>





