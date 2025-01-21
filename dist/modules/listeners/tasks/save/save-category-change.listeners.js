import { modals, buttons } from "../../../constants/ui-dom-elements.constants";
import { taskManager } from "../../../task-manager";
import { modalClosingTransition } from "../../../constants/modal-close-transition.constant";
(() => {
    buttons.saveCategoryChange.addEventListener("click", (e) => {
        e.preventDefault();
        taskManager.updateTaskCategory();
        modals.modalOverlay.style.transition = modalClosingTransition;
        modals.modalOverlay.classList.remove("show-modal");
    });
})();
