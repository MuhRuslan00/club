const swiper = new Swiper('.swiper', {
  slidesPerView: 5,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2, 
    },

    992: {
      slidesPerView: 3, 
    },

    1200: {
      slidesPerView: 4, 
    },

    1200: {
      slidesPerView: 5, 
    }
  }
});


