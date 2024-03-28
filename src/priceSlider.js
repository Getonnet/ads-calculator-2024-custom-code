import noUiSlider from "nouislider";

const handlesSlider = document.getElementById("price-slider");

export function priceSlider() {
  noUiSlider.create(handlesSlider, {
    connect: true,
    start: 0,
    step: 1,
    range: {
      min: 0,
      max: 7,
    },
    pips: {
      mode: "values",
      values: [0, 1, 2, 3, 4, 5, 6, 7],
      density: 10,
    },
  });

  // handlesSlider.noUiSlider.on("change", function (values, handle) {
  //   if (values[handle] < 6000) {
  //     handlesSlider.noUiSlider.set(6000);
  //   }
  // });

  handlesSlider.noUiSlider.on("update", function (values, handle) {
    // TODO: get the value and update the price range form API
    $(".price-range").text(`${values[handle]} Kr`);
  });
}
