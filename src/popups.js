// general popup management
export const initPopup = (popupTrigger, popup, popupContentWrapper, closePopupBtn) => {
  popupTrigger.on("click", function (e) {
    e.preventDefault();
    popup.fadeIn();
  });
  closePopupBtn.on("click", function () {
    popup.fadeOut();
  });

  // if the target of the click isn't the container nor a descendant of the container
  popup.on("click", function (e) {
    if (!popupContentWrapper.is(e.target) && popupContentWrapper.has(e.target).length === 0) {
      popup.fadeOut();
    }
  });
};

export function popups() {
  // popups: help request
  const $helpPopupTriggers = $(".popup_link");
  const $helpPopup = $(".help-popup");
  const $helpPopupContentWrapper = $helpPopup.find(".popup-content_wrapper");
  const $closeHelpPopupBtn = $helpPopup.find(".close-btn");

  // popups: thanks after form submit
  const $thanksPopupTriggers = $(".NO_TRIGGER_FOR_THIS_POPUP");
  const $thanksPopup = window.$thanksPopup || $(".thankyou-popup");
  const $thanksPopupContentWrapper = $thanksPopup.find(".popup-content_wrapper");
  const $closeThanksPopupBtn = $thanksPopup.find(".close-btn");

  // init help popup
  initPopup($helpPopupTriggers, $helpPopup, $helpPopupContentWrapper, $closeHelpPopupBtn);
  // init thanks popup
  initPopup($thanksPopupTriggers, $thanksPopup, $thanksPopupContentWrapper, $closeThanksPopupBtn);
  /* --------- END popups -------- */
}
