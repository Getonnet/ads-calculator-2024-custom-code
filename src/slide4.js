export function initSlide4(customSlider) {
  $(".marketing-calc_content-wrapper_page-5 .pricing-button").on("click", function (e) {
    e.preventDefault();
    customSlider.slideNext();
  });

  // handle form submit: user details form
  const $form = $("#main-form");
  const $primarySubmitBtn = $("#primary-submit-btn");
  const $loader = $form.find(".loader");
  const $errorMessage = $form.find(".form-error-wrapper");

  function showLoadingState() {
    $loader.show();
    $primarySubmitBtn.attr("disabled", true);
    $primarySubmitBtn.css({
      pointerEvents: "none",
      textIndent: "-9999px",
    });
  }

  function hideLoadingState() {
    $loader.hide();
    $primarySubmitBtn.attr("disabled", false);
    $primarySubmitBtn.css({
      pointerEvents: "auto",
      textIndent: "0",
    });
  }

  $primarySubmitBtn.on("click", function () {
    // save custom info, this is not the final submit
    showLoadingState();
    $form.trigger("submit");
  });

  $form.on("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // get all form field values including checkboxes
    const data = {};
    const formFields = $form.serializeArray();
    formFields.forEach((field) => {
      data[field.name] = field.value;
    });

    // For checkboxes that are not checked, assign an empty string
    $form.find($("input[type=checkbox]:not(:checked)")).each(function () {
      if (!data.hasOwnProperty(this.name)) {
        data[this.name] = "";
      }
    });

    console.log(data);

    // if a field is empty, do not submit & show error
    if (Object.values(data).includes("")) {
      console.error("Please fill all fields");
      $errorMessage.show();
      hideLoadingState();
    } else {
      $errorMessage.hide();
      // submit the form
      setTimeout(() => {
        console.warn("Form submitted successfully");
        hideLoadingState();
        customSlider.slideTo(5);
      }, 2000);
    }
  });
  // -------- END form submit --------
}
