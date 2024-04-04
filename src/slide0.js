import { setValue } from "./utils.js";

export function initSlide0(customSlider) {
  $(".marketing-calc_content-wrapper .main-button").on("click", function () {
    // save selected values to local storage
    setValue("step1", $(this).attr("data-val"));
    // animate and go to next step
    customSlider.slideNext();
  });
}
