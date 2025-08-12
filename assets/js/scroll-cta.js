document.addEventListener("DOMContentLoaded", function() {
  const cta = document.querySelector('.scroll-cta');

  if (cta) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cta.classList.add('visible');
          observer.unobserve(cta);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(cta);

    // Si ya está en pantalla al cargar
    if (isInViewport(cta)) {
      cta.classList.add('visible');
    }

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }
});
