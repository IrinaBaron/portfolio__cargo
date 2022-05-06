document.addEventListener('DOMContentLoaded', () => {

  try {

    const swiper1 = new Swiper('.hero__swiper', {

      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ' .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.hero__swiper .swiper-button-next',
        prevEl: '.hero__swiper .swiper-button-prev',
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },

    });
    
  } catch (error) {
    console.log(error)
  }

})
