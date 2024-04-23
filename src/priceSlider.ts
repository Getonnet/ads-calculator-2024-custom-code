import noUiSlider from "nouislider";
import { getValues, setValue } from "./utils.js";

// const defaultPriceRange = [
//   {
//     value: "6 000 - 10 000",
//   },
//   {
//     value: "10 000 - 15 000",
//   },
//   {
//     value: "15 000 - 20 000",
//   },
//   {
//     value: "20 000 - 30 000",
//   },
//   {
//     value: "30 000 - 40 000",
//   },
//   {
//     value: "40 000 - 50 000",
//   },
//   {
//     value: "50 000+",
//   },
// ];

// antallAnnonser:"1"
// besokende:"400"
// konverteringer:  "10"
// priceRange:(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// socialMedia:(8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// visninger:"45000"

function findIndexInPriceRange(priceRange, number) {
  const num = parseInt(number);
  let closestIndex = -1;
  let minDiff = Infinity;
  for (let i = 0; i < priceRange.length; i++) {
    const range = priceRange[i].value.split(" - ");
    const min = parseInt(range[0].replace(/\D/g, ""), 10); // Minimum value of the range
    const max = range[1].includes("+") ? Infinity : parseInt(range[1].replace(/\D/g, ""), 10); // Maximum value of the range
    if (num >= min && num <= max) {
      return i; // Return the index if the number falls within this range
    } else {
      // Check if the current range is closer than the previous closest range
      const diff = Math.min(Math.abs(num - min), Math.abs(num - max));
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    }
  }
  return closestIndex; // Return the index of the closest range
}

// used in step 4, slide 3
export function initPriceSlider(prices, basePricePerPlatform) {
  const priceRange = prices["priceRange"];
  const { antallAnnonser, besokende, konverteringer, visninger } = prices;
  const ad_spend = Number(getValues("ad_spend"));

  // .number-of-conversion, .number-of-visitors, .number-of-views, .number-of-ads
  const currentStep = $(".marketing-calc_content-wrapper_page-4");
  const $numberOfAds = currentStep.find(".number-of-ads").first();
  const $numberOfViews = currentStep.find(".number-of-views").first();
  const $numberOfVisitors = currentStep.find(".number-of-visitors").first();
  const $numberOfConversion = currentStep.find(".number-of-conversion").first();

  function getResultNum(budget, n) {
    return ((budget * +n) / +basePricePerPlatform).toFixed(0);
  }

  $numberOfAds.text(getResultNum(ad_spend, antallAnnonser));
  $numberOfViews.text(getResultNum(ad_spend, visninger));
  $numberOfVisitors.text(getResultNum(ad_spend, besokende));
  $numberOfConversion.text(getResultNum(ad_spend, konverteringer));

  // no-ui slider
  const handlesSlider = document.getElementById("price-slider");

  noUiSlider.create(handlesSlider, {
    start: findIndexInPriceRange(priceRange, ad_spend), // default value: based on figma design
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
    const price = priceRange[Number(values[handle])]?.value || "N/A";

    // save value to local storage
    setValue("step4", price);

    // update the numbers based on the price range
    const newPrice = parseInt(price.replaceAll("+", "").replaceAll(" ", "").split(" - ")[0]);
    $numberOfAds.text(getResultNum(newPrice, antallAnnonser));
    $numberOfViews.text(getResultNum(newPrice, visninger));
    $numberOfVisitors.text(getResultNum(newPrice, besokende));
    $numberOfConversion.text(getResultNum(newPrice, konverteringer));
    setValue(
      "resultsPromised",
      JSON.stringify({
        numberOfAds: getResultNum(newPrice, antallAnnonser),
        numberOfViews: getResultNum(newPrice, visninger),
        numberOfVisitors: getResultNum(newPrice, besokende),
        numberOfConversion: getResultNum(newPrice, konverteringer),
      }),
    );

    $(".price-range").text(`${price} Kr`);
  });
}
