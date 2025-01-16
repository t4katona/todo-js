import {
  modals,
  buttons,
} from "../../../constants/ui-dom-elements.constants.js";
import { taskManager } from "../../../task-manager.js";
import { modalClosingTransition } from "../../../constants/modal-close-transition.constant.js";
import { getEditTaskModalInputs } from "../../../modal-helpers/edit-task-modal.helpers.js";

(() => {
  buttons.saveEditedTask.addEventListener("click", (e) => {
    e.preventDefault();
    taskManager.editTask(getEditTaskModalInputs());
    modals.modalOverlay.style.transition = modalClosingTransition;
    modals.modalOverlay.classList.remove("show-modal");
  });
})();
