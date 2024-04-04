export function initslide2(customSlider) {
  $(".marketing-calc_content-wrapper_page-3 label").on("click", function (e) {
    // take over webflow's default click event
    e.preventDefault();
    e.stopImmediatePropagation();

    const $input = $(this).find("input");
    $input.prop("checked", !$input.prop("checked"));
    console.log($input);
    // handle the checked state
    if ($input.prop("checked")) {
      $input.prev().addClass("w--redirected-checked");
    } else $input.prev().removeClass("w--redirected-checked");

    // if "platform-others" is checked, uncheck all other checkboxes
    if ($input.attr("name") === "platform-others" && $input.is(":checked")) {
      console.log("PLATFORM OTHERS is CLICKED");
      // Uncheck all other checkboxes except "platform-others"
      $(this)
        .closest("form")
        .find("input[type='checkbox']")
        .not($input)
        .prop("checked", false)
        .prev()
        .removeClass("w--redirected-checked");
    } else {
      // uncheck "platform-others" if any other checkbox is checked
      if ($input.attr("name") !== "platform-others" && $input.is(":checked")) {
        console.log("A PLATFORM WAS SELECTED");
        $(this)
          .closest("form")
          .find("input[name='platform-others']")
          .prop("checked", false)
          .prev()
          .removeClass("w--redirected-checked");
      }
    }
  });

  // goto next step
  $(".marketing-calc_content-wrapper_page-3 .main-button").on("click", function (e) {
    e.preventDefault();
    // check if at least one checkbox is checked
    const $checkedCheckboxes = $(".marketing-calc_content-wrapper_page-3 input:checked");
    if ($checkedCheckboxes.length === 0) {
      // set errors
      // throw new error("Please select at least one option");
      throw new Error("Please select at least one option");
    } else {
      customSlider.slideNext();
    }
  });
}
