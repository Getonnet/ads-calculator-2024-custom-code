import "./style.css";
// import javascriptLogo from "../javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

window.vite = "vite";

(function ($) {
  console.log("LOCAL_SCRIPT_LOADED");
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

  const customSlider = new Swiper(".swiper", {
    loop: false,
    rewind: false,
    allowTouchMove: false,
    noSwipingClass: "swiper-no-swiping",
  });

  customSlider.on("slideChange", function () {
    const activeSlide = customSlider.activeIndex;
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

  // step 1 logics
  $(".marketing-calc_content-wrapper .main-button").on("click", function () {
    // TODO: save choice to database
    customSlider.slideNext();
  });

  /**
   * step 2 logics
   * TODO: THIS is firing twice, possibly due to the click event on the label
   * TODO: optimize this in future
   */
  function updateStep2SelectionAndGotoNextStep() {
    console.count("RUNNING FUNC STEP 2");

    // TODO: save choice to database

    // get all checked radio buttons
    const checkedRadioButtons = $(".marketing-calc_content-wrapper_page-2 input:checked");
    const checkedLabel = $(this).closest("label");

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

  /**
   * step 3 logics
   */
  $(".marketing-calc_content-wrapper_page-3 label").on("click", function (e) {
    // take over webflow's default click event
    e.preventDefault();
    const $input = $(this).find("input");
    $input.prop("checked", !$input.prop("checked"));
    // handle the checked state
    if ($input.is(":checked")) {
      $input.prev().addClass("w--redirected-checked");
    } else $input.prev().removeClass("w--redirected-checked");

    // if "platform-others" is checked, uncheck all other checkboxes
    if ($input.attr("name") === "platform-others" && $input.is(":checked")) {
      console.log("PLATFORM OTHERS is CLICKED");
      // Uncheck all other checkboxes except "platform-others"
      $(this)
        .closest("form")
        .find("input[type='checkbox']")
        .not($input)
        .prop("checked", false)
        .prev()
        .removeClass("w--redirected-checked");
    } else {
      // uncheck "platform-others" if any other checkbox is checked
      if ($input.attr("name") !== "platform-others" && $input.is(":checked")) {
        console.log("OTHERS is CLICKED");
        $(this)
          .closest("form")
          .find("input[name='platform-others']")
          .prop("checked", false)
          .prev()
          .removeClass("w--redirected-checked");
      }
    }
  });

  // goto next step
  $(".marketing-calc_content-wrapper_page-3 .main-button").on("click", function (e) {
    e.preventDefault();
    // check if at least one checkbox is checked
    const $checkedCheckboxes = $(".marketing-calc_content-wrapper_page-3 input:checked");
    if ($checkedCheckboxes.length === 0) {
      // set errors
      // throw new error("Please select at least one option");
      throw new Error("Please select at least one option");
    } else {
      customSlider.slideNext();
    }
  });

  /**
   * -------------------------------------------------------------------------------
   * step 4 logics
   */
  // reinit finsweet range slider
  customSlider.on("slideChange", function () {
    if (customSlider.activeIndex === 3) {
      console.log("REINIT RANGE SLIDER");

      setTimeout(function () {
        if (typeof window.fsAttributes !== "undefined") window.fsAttributes.rangeslider.init();
        else console.error("Finsweet range slider not found");
      }, 1000);

      // fire window resize event to fix the range slider
      $(window).trigger("resize");
    }
  });

  $(".marketing-calc_content-wrapper_page-4 .main-button").on("click", function (e) {
    e.preventDefault();
    customSlider.slideNext();
  });

  /**
   * step 5 logics
   */
  $(".marketing-calc_content-wrapper_page-5 .pricing-button").on("click", function (e) {
    e.preventDefault();
    customSlider.slideNext();
  });
})(jQuery);
