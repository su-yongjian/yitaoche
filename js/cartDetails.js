var swiper = new Swiper('.cartDetails-swiper-container', {
    loop: true,
    speed: 1000,
    autoplay: 4400,
    autoplayDisableOnInteraction: false,
    effect: "slide",
    // pagination: ".swiper-pagination",
    paginationClickable: true,
    onSlideChangeEnd: function(swiper) {
      prevSlide = swiper.slides[swiper.previousIndex];
      prevSlide.className = "swiper-slide";
    },
    // 如果需要前进后退按钮
    // 如果需要前进后退按钮
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
  });