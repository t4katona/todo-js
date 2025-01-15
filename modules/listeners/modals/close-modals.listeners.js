import {
    buttons,
    modals,
  } from "../../constants/ui-dom-elements.constants.js"; // <-- import different 

(() => {
    buttons.modalClosingBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          modals.modalOverlay.classList.remove("show-modal");
        });
      });
})();
