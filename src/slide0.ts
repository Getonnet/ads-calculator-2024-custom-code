import { setValue } from "./utils.js";

export function initSlide0(customSlider) {
  $(".marketing-calc_content-wrapper .main-button").on("click", function () {
    // save selected values to local storage
    setValue("step1", $(this).attr("data-val"));
    setValue("step1Total", 0); // step 1 doesn't have a total value
    // animate and go to next step
    customSlider.slideNext();
  });
}
