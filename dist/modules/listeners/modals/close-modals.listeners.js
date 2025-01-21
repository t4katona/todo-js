import { buttons, modals } from "../../constants/ui-dom-elements.constants";
import { modalClosingTransition } from "../../constants/modal-close-transition.constant";
(() => {
    buttons.modalClosingBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modals.modalOverlay.style.transition = modalClosingTransition;
            modals.modalOverlay.classList.remove("show-modal");
        });
    });
})();
