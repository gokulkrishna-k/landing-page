const swiper = new Swiper('.swiper-container', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    1100: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
