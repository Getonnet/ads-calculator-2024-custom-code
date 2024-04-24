import noUiSlider from "nouislider";
import { getValues, setValue } from "./utils.js";

function findIndexInPriceRange(priceArr, target) {
  let closestNumIndex = -1;
  let closestNumDiff = Infinity;

  for (let i = 0; i < priceArr.length; i++) {
    if (priceArr[i] >= target && Math.abs(priceArr[i] - target) < closestNumDiff) {
      closestNumDiff = Math.abs(priceArr[i] - target);
      closestNumIndex = i;
    }
  }

  return closestNumIndex;
}

// used in step 4, slide 3
export function initPriceSlider(customSlider, prices, basePricePerPlatform) {
  const priceRange = prices["budget"].map((price) => price.value);
  // console.log("initPriceSlider", prices);
  // console.log("initPriceSlider", priceRange);
  const { numberOfAds, pageVisitors, conversions, adViews } = prices;
  const ad_spend = Number(getValues("ad_spend"));
  const ecommerce = Number(getValues("step2total"));
  const platformsBaseSum = Number(getValues("step3Total"));
  const currentTotal = ecommerce + platformsBaseSum + ad_spend;

  // .number-of-conversion, .number-of-visitors, .number-of-views, .number-of-ads
  const currentStep = $(".marketing-calc_content-wrapper_page-4");
  const $numberOfAds = currentStep.find(".number-of-ads").first();
  const $numberOfViews = currentStep.find(".number-of-views").first();
  const $numberOfVisitors = currentStep.find(".number-of-visitors").first();
  const $numberOfConversion = currentStep.find(".number-of-conversion").first();

  function getResultNum(budget, n) {
    return ((+budget * +n) / +basePricePerPlatform).toFixed(0);
  }

  $numberOfAds.text(getResultNum(ad_spend, numberOfAds));
  $numberOfViews.text(getResultNum(ad_spend, adViews));
  $numberOfVisitors.text(getResultNum(ad_spend, pageVisitors));
  $numberOfConversion.text(getResultNum(ad_spend, conversions));

  // no-ui slider
  const handlesSlider = document.getElementById("price-slider");

  noUiSlider.create(handlesSlider, {
    start: findIndexInPriceRange(priceRange, currentTotal), // default value: based on figma design
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

  handlesSlider.noUiSlider.on("update", function (values, handle) {
    const price = priceRange[Number(values[handle])] || "N/A";

    // save value to local storage
    setValue("step4", price);

    // update the numbers based on the price range
    const newPrice = parseInt(price.replaceAll("+", "").replaceAll(" ", ""));
    $numberOfAds.text(getResultNum(newPrice, numberOfAds));
    $numberOfViews.text(getResultNum(newPrice, adViews));
    $numberOfVisitors.text(getResultNum(newPrice, pageVisitors));
    $numberOfConversion.text(getResultNum(newPrice, conversions));
    setValue(
      "resultsPromised",
      JSON.stringify({
        numberOfAds: getResultNum(newPrice, numberOfAds),
        numberOfViews: getResultNum(newPrice, adViews),
        numberOfVisitors: getResultNum(newPrice, pageVisitors),
        numberOfConversion: getResultNum(newPrice, conversions),
      }),
    );

    $(".price-range").text(`${price} Kr`);
  });

  // on slide change update the price slider (if correct index)
  customSlider.on("slideChange", function () {
    if (customSlider.activeIndex === 3) {
      const price = findIndexInPriceRange(priceRange, currentTotal);
      handlesSlider.noUiSlider.set(price);
    }
  });
}
