export function slide1(customSlider) {
  console.log("slide1");
  $(".marketing-calc_content-wrapper .main-button").on("click", function () {
    // TODO: save choice to database
    customSlider.slideNext();
  });
}
