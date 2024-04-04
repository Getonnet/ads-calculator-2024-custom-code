export function initSlide3(customSlider) {
  const priceDisplay = $(".marketing-calc_content-wrapper_page-4 .price-range");

  // go to next step
  $(".marketing-calc_content-wrapper_page-4 .main-button").on("click", function (e) {
    e.preventDefault();
    customSlider.slideNext();
  });
}
