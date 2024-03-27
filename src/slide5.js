export function slide5(customSlider) {
  $(".marketing-calc_content-wrapper_page-5 .pricing-button").on("click", function (e) {
    e.preventDefault();
    customSlider.slideNext();
  });
}
