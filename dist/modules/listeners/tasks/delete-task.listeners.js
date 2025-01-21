import { containers } from "../../constants/ui-dom-elements.constants";
import { taskManager } from "../../task-manager";
(() => {
    containers.todosContainer.addEventListener("click", (e) => {
        const target = e.target;
        if (target.closest(".task-delete-btn")) {
            const todoCard = target.closest(".todo-card");
            const taskID = todoCard.dataset.id;
            if (taskID)
                taskManager.deleteTask(taskID);
        }
    });
})();
