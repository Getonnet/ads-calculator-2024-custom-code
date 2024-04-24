import "./nouislider.min.css";
import "./style.css";

import { pageSlider } from "./page-slider.js";
import { initSlide0 } from "./slide0.js";
import { initSlide1 } from "./slide1.js";
import { initSlide2 } from "./slide2.js";
import { initSlide3 } from "./slide3.js";
import { initSlide4 } from "./slide4.js";
import { initSlide6 } from "./slide6.js";
import { initPopups } from "./popups.js";
import { initSlide5 } from "./slide5.js";
import { initPriceSlider } from "./priceSlider.js";
import { PhoneNumberWithCountrySelect } from "./phoneNumberWithCountrySelect.js";

// config settings
window.vite = "vite";

// api settings
const settingsApi = "https://marketing-calc-admin-2024.vercel.app/api/settings";
const leadsApi = "https://marketing-calc-admin-2024.vercel.app/api/lead";

// main script
(function ($) {
  console.log("LOCAL_SCRIPT_LOADED");
  let settingsData = {};

  // init page slider
  const customSlider = pageSlider();
  customSlider.slideTo(3);

  // step 1 logics
  initSlide0(customSlider);

  // phone number with country select
  PhoneNumberWithCountrySelect();

  $.ajax({
    url: settingsApi,
    type: "GET",
    success: function (data) {
      console.log(JSON.parse(data));
      settingsData = JSON.parse(data);

      // popup triggers / management: help-popup
      initPopups();

      // step 2 logics
      initSlide1(customSlider, settingsData["stepTwo"], settingsData["stepThree"]["baseTotalDivideBy"]);

      // step 3 logics
      initSlide2(customSlider, settingsData["stepThree"]);

      // step 4 logics + init price slider
      initSlide3(customSlider);
      initPriceSlider(customSlider, settingsData["stepFour"], settingsData["stepThree"]["costPerPlatform"]);

      // step 5 logics
      initSlide4(customSlider);

      // step 6 logics
      initSlide5(customSlider);

      // step 7: Final submit
      initSlide6();
    },
    error: function (error) {
      console.error(error);
    },
  });
})(jQuery);
