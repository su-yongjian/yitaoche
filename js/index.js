// <!-- Initialize Swiper -->
var swiper = new Swiper(".swiper-container-Main", {
  loop: true,
  speed: 1000,
  autoplay: 4400,
  autoplayDisableOnInteraction: false,
  effect: "fade",
  pagination: ".swiper-pagination",
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

