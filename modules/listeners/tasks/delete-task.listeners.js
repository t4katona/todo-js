import { containers } from "../../constants/ui-dom-elements.constants.js";
import { taskManager } from "../../task-manager.js";

(() => {
    containers.todosContainer.addEventListener("click", (e) => {
        if (e.target.closest(".task-delete-btn")) {
          const taskID = e.target.closest(".todo-card").dataset.id;
          taskManager.deleteTask(taskID);
        }
      });
})();