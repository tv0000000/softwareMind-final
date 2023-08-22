(function () {
  "use strict";
  // No sacar se rompe 
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  // No sacar se rompe
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

// backtotop
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
})()


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
// end section seven

// AOS
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
});