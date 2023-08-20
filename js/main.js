(function () {
  "use strict";

  // NO SACAR ESTA FUNCION SE ROMPE TODO
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  
  // NO SACAR ESTA FUNCION SE ROMPE TODO
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


  // NO SACAR ESTA FUNCION NO FUNCIONA BOTON 
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  // inicia
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

// Menu hamburguesa
const hamburgerMenu = select('.hamburger-menu');
const navList = select('nav ul.menu-responsive');

hamburgerMenu.addEventListener('click', () => {
  navList.classList.toggle('show');
});

})()


// ********* Mis js *********
// - Testimonials Slider
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
// end section seven
