import "./nouislider.min.css";
import "./style.css";

import { initSlide0 } from "./slide0.js";
import { initSlide1 } from "./slide1.js";
import { initslide2 } from "./slide2.js";
import { initSlide3 } from "./slide3.js";
import { initSlide4 } from "./slide4.js";
import { initPriceSlider } from "./priceSlider.js";
import { initSlide6 } from "./slide6.js";
import { initPopups } from "./popups.js";
import { pageSlider } from "./page-slider.js";

// config settings
window.vite = "vite";

// api settings
const apiBaseUrl = "https://marketing-calc-admin-2024.vercel.app";
const apiSettings = "/api/settings";

// main script
(function ($) {
  console.log("LOCAL_SCRIPT_LOADED");

  // init page slider
  const customSlider = pageSlider();

  // get data from api
  $.get(apiBaseUrl + apiSettings, function (data) {
    console.log(data);
  });

  // init price slider
  initPriceSlider();

  // popup triggers / management: help-popup
  initPopups();

  // step 1 logics
  initSlide0(customSlider);

  // step 2 logics
  initSlide1(customSlider);

  // step 3 logics
  initslide2(customSlider);

  // step 4 logics
  initSlide3(customSlider);

  // step 5 logics
  initSlide4(customSlider);

  // step 6: Final submit
  initSlide6();
})(jQuery);
