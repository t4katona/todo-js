import { buttons } from "../../constants/ui-dom-elements.constants.js";
import { getCreateTaskModalFormInputs } from "../../modal-helpers/create-task-modal.helpers.js";
import { taskManager } from "../../task-manager.js";

(() => {
  buttons.createTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    taskManager.addTask(getCreateTaskModalFormInputs());
  });
})();
