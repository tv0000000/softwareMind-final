// AOS
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
});

// Backtotop
function toggleBackToTopButton() {
  const backToTopButton = document.querySelector('.back-to-top');

  function handleScroll() {
    if (window.scrollY > 100) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  }

  window.addEventListener('load', handleScroll);
  window.addEventListener('scroll', handleScroll);
}

toggleBackToTopButton();

// Section Testimonials
new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }
});

// Section Counts
new PureCounter();

