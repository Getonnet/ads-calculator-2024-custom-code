export function slide0(customSlider) {
  console.log("slide0");
  $(".marketing-calc_content-wrapper .main-button").on("click", function () {
    // TODO: save choice to database
    customSlider.slideNext();
  });
}
