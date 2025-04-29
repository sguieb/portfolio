document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // swap icon between hamburger and close
      navToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
  
    // Continuous auto-scrolling carousel
    const carousel = document.getElementById('carousel');
    const slides = Array.from(carousel.children);
  
    // Clone slides for seamless looping
    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      carousel.appendChild(clone);
    });
  
    let speed = 0.5; // pixels per frame
    function continuousScroll() {
      carousel.scrollLeft += speed;
      // when we've scrolled past the original slides, reset
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }
      requestAnimationFrame(continuousScroll);
    }
    requestAnimationFrame(continuousScroll);
  });
  