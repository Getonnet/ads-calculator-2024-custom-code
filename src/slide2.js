import { setValue } from "./utils.js";

export function initSlide2(customSlider, prices) {
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

    // save the checked checkboxes to local storage
    const checkedCheckboxes = $checkedCheckboxes.map((i, el) => $(el).attr("name")).get();
    setValue("step3", JSON.stringify(checkedCheckboxes));
    setValue("step3Total", getPlatformsTotal(checkedCheckboxes, prices));
    // calculate ad_spend
    setValue("ad_spend", checkedCheckboxes.length * Number(prices["costPerPlatform"]));

    if ($checkedCheckboxes.length === 0) {
      // set errors
      throw new Error("Please select at least one option");
    } else {
      customSlider.slideNext();
    }
  });
}

const priceMap = {
  "platform-google": "google",
  "platform-facebook": "facebook",
  "platform-instagram": "instagram",
  "platform-linkedin": "linkedIn",
  "platform-tiktok": "tikTok",
  "platform-youtube": "youtube",
  "platform-snapchat": "snapchat",
  "platform-bing": "bing",
  "platform-others": "platform-others",
};

export function getPlatformsTotal(values, prices) {
  if (values.length === 0 || values.includes("platform-others")) return 0;

  let total = 0;

  values.forEach((item) => {
    const platform = priceMap[item];
    const platformPrice = prices[platform];
    total += +platformPrice;
  });

  // if facebook and instagram both selected
  if (values.includes("platform-facebook") && values.includes("platform-instagram")) {
    total -= +prices["facebook"];
    total -= +prices["instagram"];
    total += +prices["facebookAndInstagram"];
  }

  // if google and bing both are selected
  if (values.includes("platform-google") && values.includes("platform-bing")) {
    total -= +prices["google"];
    total -= +prices["bing"];
    total += +prices["googleAndBing"];
  }

  return total / +prices["baseTotalDivideBy"];
}
