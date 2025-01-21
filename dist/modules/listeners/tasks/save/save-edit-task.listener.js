import { modals, buttons } from "../../../constants/ui-dom-elements.constants";
import { taskManager } from "../../../task-manager";
import { modalClosingTransition } from "../../../constants/modal-close-transition.constant";
import { getEditTaskModalInputs } from "../../../modal-helpers/edit-task-modal.helpers";
(() => {
    buttons.saveEditedTask.addEventListener("click", (e) => {
        e.preventDefault();
        taskManager.editTask(getEditTaskModalInputs());
        modals.modalOverlay.style.transition = modalClosingTransition;
        modals.modalOverlay.classList.remove("show-modal");
    });
})();
