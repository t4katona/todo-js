import {
  containers,
  modals,
  buttons,
} from "../../constants/ui-dom-elements.constants.js";
import { setMoveTaskModalInputs } from "../../modal-helpers/move-modal.helpers.js";

(() => {
  buttons.createTaskModalOpenBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modals.modalOverlay.classList.add("show-modal");
    modals.modalCreateTask.style.display = "block";
    modals.modalCategoryChange.style.display = "none";
  });
})();

(() => {
  containers.todosContainer.addEventListener("click", (e) => {
    if (e.target.closest(".task-move-btn")) {
      const taskID = e.target.closest(".todo-card").dataset.id;
      modals.modalCategoryChange.dataset.id = taskID;
      setMoveTaskModalInputs(taskID);
      modals.modalOverlay.classList.add("show-modal");
      modals.modalCreateTask.style.display = "none";
      modals.modalCategoryChange.style.display = "block";
    }
  });
})();
