import {
  containers,
  modals,
  buttons,
} from "../../constants/ui-dom-elements.constants";
import { setMoveTaskModalInputs } from "../../modal-helpers/move-modal.helpers";
import { setEditTaskModalInputs } from "../../modal-helpers/edit-task-modal.helpers";

(() => {
  buttons.createTaskModalOpenBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modals.modalOverlay.classList.add("show-modal");
    modals.modalCreateTask.style.display = "block";
    modals.modalCategoryChange.style.display = "none";
    modals.modalEditTask.style.display = "none";
  });
})();

(() => {
  containers.todosContainer.addEventListener("click", (e) => {
    const target = e.target as Element;
    if (target.closest(".task-move-btn")) {
      const todoCard = target.closest(".todo-card") as HTMLDivElement;
      if (todoCard && todoCard.dataset.id) {
        const taskID: string = todoCard.dataset.id;
        modals.modalCategoryChange.dataset.id = taskID;
        setMoveTaskModalInputs(taskID);
        modals.modalOverlay.classList.add("show-modal");
        modals.modalCreateTask.style.display = "none";
        modals.modalEditTask.style.display = "none";
        modals.modalCategoryChange.style.display = "block";
      }
    }
  });
})();

(() => {
  containers.todosContainer.addEventListener("click", (e) => {
    const target = e.target as Element;
    if (target.closest(".task-edit-btn")) {
      const todoCard = target.closest(".todo-card") as HTMLDivElement;
      if (todoCard && todoCard.dataset.id) {
        const taskID: string = todoCard.dataset.id;
        modals.modalEditTask.dataset.id = taskID;
        setEditTaskModalInputs(taskID);
        modals.modalOverlay.classList.add("show-modal");
        modals.modalEditTask.style.display = "block";
        modals.modalCategoryChange.style.display = "none";
        modals.modalCreateTask.style.display = "none";
      }
    }
  });
})();
