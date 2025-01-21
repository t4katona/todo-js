import { containers } from "../constants/ui-dom-elements.constants";
import { taskManager } from "../task-manager";
import { generateTaskElement } from "../generator/dom-task-generator";
export const renderTasks = () => {
    containers.todoContainer.innerHTML = "";
    containers.inProgressContainer.innerHTML = "";
    containers.completedContainer.innerHTML = "";
    containers.onHoldContainer.innerHTML = "";
    const tasks = taskManager.getCreatedTasks();
    tasks.forEach((task) => {
        generateTaskElement(task);
    });
};
