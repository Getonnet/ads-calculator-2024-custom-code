import { setValue } from "./utils.js";

export function initSlide5(customSlider) {
  $(".marketing-calc_content-wrapper_page-6 .pricing-button").on("click", function (e) {
    e.preventDefault();

    // #small-package-price, #medium-package-price, #large-package-price
    const $smallPrice = $("#small-package-price");
    const $mediumPrice = $("#medium-package-price");
    const $largePrice = $("#large-package-price");

    // TODO: Update price from calculating from previous steps

    // save the package price and name to local storage
    const step5Data = {
      packagePrice: $(this).attr("data-price"),
      packageName: $(this).attr("data-val"),
    };
    setValue("step5", JSON.stringify(step5Data));

    customSlider.slideNext();
  });
}
