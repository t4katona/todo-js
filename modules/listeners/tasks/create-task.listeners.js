import { buttons, modals } from "../../constants/ui-dom-elements.constants.js";
import { getCreateTaskModalFormInputs } from "../../modal-helpers/create-task-modal.helpers.js";
import { taskManager } from "../../task-manager.js";
import { modalClosingTransition } from "../../constants/modal-close-transition.constant.js";

(() => {
  buttons.createTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    taskManager.addTask(getCreateTaskModalFormInputs());
    modals.modalOverlay.style.transition = modalClosingTransition;
    modals.modalOverlay.classList.remove("show-modal");
  });
})();
