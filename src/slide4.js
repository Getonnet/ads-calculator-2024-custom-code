export function slide4(customSlider) {
  const priceDisplay = $(".marketing-calc_content-wrapper_page-4 .price-range");

  // re init finsweet range slider
  customSlider.on("slideChange", function () {
    if (customSlider.activeIndex === 3) {
      console.log("RE INIT RANGE SLIDER");

      setTimeout(function () {
        if (typeof window.fsAttributes !== "undefined") window.fsAttributes.rangeslider.init();
        else console.error("Finsweet range slider not found");
      }, 1000);

      // fire window resize event to fix the range slider
      $(window).trigger("resize");
    }
  });

  // range slider change handler
  $(".fs-rangeslider_input").on("input", function () {
    const value = $(this).val();
    priceDisplay.text(`${value} Kr`);
  });

  // go to next step
  $(".marketing-calc_content-wrapper_page-4 .main-button").on("click", function (e) {
    e.preventDefault();
    customSlider.slideNext();
  });
}
