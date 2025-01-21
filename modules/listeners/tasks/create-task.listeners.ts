import { buttons, modals } from "../../constants/ui-dom-elements.constants";
import { getCreateTaskModalFormInputs } from "../../modal-helpers/create-task-modal.helpers";
import { taskManager } from "../../task-manager";
import { modalClosingTransition } from "../../constants/modal-close-transition.constant";

(() => {
  buttons.createTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    taskManager.addTask(getCreateTaskModalFormInputs());
    modals.modalOverlay.style.transition = modalClosingTransition;
    modals.modalOverlay.classList.remove("show-modal");
  });
})();
