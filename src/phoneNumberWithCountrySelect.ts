export function PhoneNumberWithCountrySelect() {
  document.querySelectorAll<HTMLInputElement>("input[ms-code-phone-number]").forEach((input) => {
    const intlTelInput = (window as any).intlTelInput;
    const intlTelInputUtils = (window as any).intlTelInputUtils;

    let iti = intlTelInput(input, {
      preferredCountries: ["no", "se"],
      countrySearch: true,
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    fetch("https://ipinfo.io", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        let countryCode = data.country;
        iti.setCountry(countryCode);
      });

    input.addEventListener("change", formatPhoneNumber);
    input.addEventListener("keyup", formatPhoneNumber);

    function formatPhoneNumber() {
      let formattedNumber = iti.getNumber(intlTelInputUtils.numberFormat.INTERNATIONAL);
      input.value = formattedNumber;
    }

    let form = input.closest("form");
    form?.addEventListener("submit", () => {
      let formattedNumber = iti.getNumber(intlTelInputUtils.numberFormat.INTERNATIONAL);
      input.value = formattedNumber;
    });
  });
}
