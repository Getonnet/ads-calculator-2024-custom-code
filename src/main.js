import "./nouislider.min.css";
import "./style.css";

import { slide0 } from "./slide0.js";
import { slide1 } from "./slide1.js";
import { slide2 } from "./slide2.js";
import { slide3 } from "./slide3.js";
import { slide4 } from "./slide4.js";
import { priceSlider } from "./priceSlider.js";
import { slide6 } from "./slide6.js";
import { popups } from "./popups.js";

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
  const $thanksPopup = $(".thankyou-popup");

  const customSlider = new Swiper(".swiper", {
    loop: false,
    rewind: false,
    allowTouchMove: false,
    noSwipingClass: "swiper-no-swiping",
  });

  // customSlider.slideTo(5);

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

  // go back button - specific code
  const goBackButton = $(".back-btn");
  goBackButton.on("click", function () {
    customSlider.slidePrev();
  });

  // init price slider
  priceSlider();

  // step 1 logics
  slide0(customSlider);

  // step 2 logics
  slide1(customSlider);

  // step 3 logics
  slide2(customSlider);

  // step 4 logics
  slide3(customSlider);

  // step 5 logics
  slide4(customSlider);

  /**
   * ---------------------------------------
   * popup triggers / management: help-popup
   */
  popups();

  /**
   * ---------------------------------------
   * Final submit
   */
  slide6($thanksPopup);
})(jQuery);
