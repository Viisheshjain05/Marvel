$(document).ready(function() {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 'auto',
    breakpoints: {
      1024: {
        slidesPerView: 4.9
      },

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  var swiperCard = new Swiper(".swiper-container-card", {
    slidesPerView: 4
  });

  var swiperFixture = new Swiper(".si-swiper--fixture", {
    slidesPerView: 1
  });

  var swiperTab = new Swiper(".si-tab-container", {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  var swiperlg = new Swiper(".si-swiper-lg", {
    // slidesPerView: 'auto',

  });
  var swiperlg2 = new Swiper(".si-swiper-lg-2", {
    // slidesPerView: 'auto',

  });
  var swiperedit = new Swiper(".si-swiper-editorial", {
    slidesPerView: 1.1,
    // touchEventsTarget: 'swiper-wrapper'
  });
  var swiperplyr = new Swiper(".si-swiper-plyr", {
    slidesPerView: 'auto'
  });

  var swiperBlock = new Swiper(".si-swiper-block", {
    slidesPerView: 1.1,
    spaceBetween: 10
    
  });

});
