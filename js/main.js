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

// header
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    navbarTogglerIcon.classList.remove('navbar-dark');
    navbarTogglerIcon.classList.add('navbar-light');
  } else {
    navbarTogglerIcon.classList.remove('navbar-light');
    navbarTogglerIcon.classList.add('navbar-dark');
  }
});


