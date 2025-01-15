import { buttons, modals } from "../../constants/ui-dom-elements.constants.js";
import { modalClosingTransition } from "../../constants/modal-close-transition.constant.js";

(() => {
  buttons.modalClosingBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modals.modalOverlay.style.transition = modalClosingTransition;
      modals.modalOverlay.classList.remove("show-modal");
    });
  });
})();
