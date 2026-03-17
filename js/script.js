document.addEventListener('DOMContentLoaded', () => {

  // ── Nav toggle (mobile) ──
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.textContent = '☰';
      });
    });
  }

  // ── Carousel — transform-based continuous scroll ──
  const carousel = document.getElementById('carousel');
  if (!carousel) return;

  // Clone all images for seamless loop
  const originals = Array.from(carousel.children);
  originals.forEach(img => carousel.appendChild(img.cloneNode(true)));

  let x = 0;
  const speed = 0.5; // px per frame

  function tick() {
    x += speed;
    // When we've scrolled one full set, reset silently
    const half = carousel.scrollWidth / 2;
    if (x >= half) x -= half;
    carousel.style.transform = `translateX(${-x}px)`;
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
});