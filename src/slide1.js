import { setRadioValue, setValue } from "./utils.js";

export function initSlide1(customSlider, prices, baseDivider) {
  /**
   * step 2 logics
   * TODO: THIS is firing twice, possibly due to the click event on the label
   * TODO: optimize this in future
   */
  function updateStep2SelectionAndGotoNextStep() {
    // console.count("RUNNING FUNC STEP 2");

    // get all checked radio buttons
    const checkedRadioButtons = $(".marketing-calc_content-wrapper_page-2 input:checked");
    const checkedLabel = $(this).closest("label");

    // save selected values to local storage
    const selectedVal = setRadioValue("step2", checkedRadioButtons);

    // set total
    const amountToAddWithTotal = selectedVal && selectedVal === "true" ? prices["priceForYes"] : prices["priceForNo"];
    setValue("step2total", amountToAddWithTotal / baseDivider);

    // animate and go to next step
    if (checkedRadioButtons.length > 0) {
      checkedLabel
        .animate({ opacity: 0 }, 50)
        .delay(50)
        .animate({ opacity: 1 }, 50)
        .delay(50)
        .animate({ opacity: 0 }, 50)
        .delay(50)
        .animate({ opacity: 1 }, 50)
        .delay(50)
        .animate({ opacity: 0 }, 50)
        .delay(50)
        .animate({ opacity: 1 }, 50);

      setTimeout(() => {
        customSlider.slideTo(2);
      }, 800);
    }
  }

  $(".marketing-calc_content-wrapper_page-2 label").on("click", updateStep2SelectionAndGotoNextStep);
}
