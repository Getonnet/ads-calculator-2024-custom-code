// import "./style.css";
// import javascriptLogo from "../javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";
//
// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;
//
// setupCounter(document.querySelector("#counter"));

window.vite = "vite";

(function ($) {
  console.log("LOCAL_SCRIPT_LOADED");

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: false,

    // If we need pagination
    pagination: {},

    // Navigation arrows
    navigation: {},

    // And if we need scrollbar
    scrollbar: {},
  });
})(jQuery);
