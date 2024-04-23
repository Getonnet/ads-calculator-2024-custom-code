export function pageSlider() {
  /**
   * get all progress bars
   * this will be filled on slide change
   */
  const statusBars = $(".status-bar_rectangle");
  const progressBarForStep1 = $("[step='1']").find(statusBars).first();
  const progressBarForStep2 = $("[step='2']").find(statusBars).first();
  const progressBarForStep3 = $("[step='3']").find(statusBars).first();
  const progressBarForStep4 = $("[step='4']").find(statusBars).first();
  const progressBarForStep5 = $("[step='5']").find(statusBars).first();

  const slider = new Swiper(".swiper", {
    loop: false,
    rewind: false,
    allowTouchMove: false,
    noSwipingClass: "swiper-no-swiping",
  });

  slider.on("slideChange", function () {
    const activeSlide = slider.activeIndex;
    if (activeSlide === 0) {
      progressBarForStep1.removeClass("active");
    }
    if (activeSlide === 1) {
      progressBarForStep1.addClass("active");
      progressBarForStep2.removeClass("active");
    } else if (activeSlide === 2) {
      progressBarForStep2.addClass("active");
      progressBarForStep3.removeClass("active");
    } else if (activeSlide === 3) {
      progressBarForStep3.addClass("active");
      progressBarForStep4.removeClass("active");
    } else if (activeSlide === 4) {
      progressBarForStep4.addClass("active");
      progressBarForStep5.removeClass("active");
    } else if (activeSlide === 5) {
      progressBarForStep5.addClass("active");
    }
  });

  // go back button - specific code
  const goBackButton = $(".back-btn");
  goBackButton.on("click", function () {
    slider.slidePrev();
  });

  return slider;
}
