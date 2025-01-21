import { containers } from "../constants/ui-dom-elements.constants";
import { taskManager } from "../task-manager";
import { generateTaskElement } from "../generator/dom-task-generator";
import { Task } from "../../interfaces/task.interfaces";

export const renderTasks = () => {
  containers.todoContainer.innerHTML = "";
  containers.inProgressContainer.innerHTML = "";
  containers.completedContainer.innerHTML = "";
  containers.onHoldContainer.innerHTML = "";

  const tasks: Task[] = taskManager.getCreatedTasks();
  tasks.forEach((task) => {
    generateTaskElement(task);
  });
};
