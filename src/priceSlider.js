import noUiSlider from "nouislider";
import { setValue } from "./utils.js";

const defaultPriceRange = [
  {
    value: "6 000 - 10 000",
  },
  {
    value: "10 000 - 15 000",
  },
  {
    value: "15 000 - 20 000",
  },
  {
    value: "20 000 - 30 000",
  },
  {
    value: "30 000 - 40 000",
  },
  {
    value: "40 000 - 50 000",
  },
  {
    value: "50 000+",
  },
];

// on page load, set default value
// setValue("step4", defaultPriceRange[3].value);

// used in step 4, slide 3
export function initPriceSlider(priceRange = defaultPriceRange) {
  // .number-of-conversion, .number-of-visitors, .number-of-views, .number-of-ads
  const currentStep = $(".marketing-calc_content-wrapper_page-4");
  const $numberOfAds = currentStep.find(".number-of-ads").first();
  const $numberOfViews = currentStep.find(".number-of-views").first();
  const $numberOfVisitors = currentStep.find(".number-of-visitors").first();
  const $numberOfConversion = currentStep.find(".number-of-conversion").first();

  const handlesSlider = document.getElementById("price-slider");

  noUiSlider.create(handlesSlider, {
    start: 3, // default value: based on figma design
    connect: [true, false],
    step: 1,
    range: {
      min: 0,
      max: 6,
    },
    pips: {
      mode: "values",
      values: [0, 1, 2, 3, 4, 5, 6],
      density: 15,
    },
  });

  // handlesSlider.noUiSlider.on("change", function (values, handle) {
  //   if (values[handle] < 6000) {
  //     handlesSlider.noUiSlider.set(6000);
  //   }
  // });

  handlesSlider.noUiSlider.on("update", function (values, handle) {
    console.log(values[handle]);

    const price = priceRange[Number(values[handle])]?.value || "N/A";

    // save value to local storage
    setValue("step4", price);

    $(".price-range").text(`${price} Kr`);
  });
}
