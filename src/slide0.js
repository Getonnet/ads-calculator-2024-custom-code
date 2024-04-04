export function initSlide0(customSlider) {
  console.log("initSlide0");
  $(".marketing-calc_content-wrapper .main-button").on("click", function () {
    // TODO: save choice to database
    customSlider.slideNext();
  });
}
