export function initSlide6() {
  const $thanksPopup = $(".thankyou-popup");
  const $finalSubmitBtn = $("#final-submit-btn");
  const $finalLoader = $finalSubmitBtn.find(".loader");

  $finalSubmitBtn.on("click", function (e) {
    e.preventDefault();
    $finalLoader.show();
    $finalSubmitBtn.attr("disabled");
    $finalLoader.siblings().css({
      pointerEvents: "none",
      textIndent: "-9999px",
      display: "none",
    });

    setTimeout(() => {
      console.warn("Final submit successful");
      $thanksPopup.fadeIn(150);
      setTimeout(function () {
        $finalLoader.hide();
        $finalLoader.siblings().css({
          pointerEvents: "none",
          textIndent: "0",
          display: "block",
        });
        $finalSubmitBtn.css({
          opacity: 0.4,
          pointerEvents: "none",
        });
      }, 300);
    }, 2000);
  });
}
