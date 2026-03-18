document.addEventListener('DOMContentLoaded', () => {

  // ── Nav toggle (mobile) ──
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isOpen = navLinks.classList.contains('active');
      navToggle.textContent = isOpen ? '✕' : '☰';
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.textContent = '☰';
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

});