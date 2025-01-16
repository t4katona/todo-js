import { taskManager } from "../task-manager.js";
import { taskCategories } from "../constants/task-categories.js";

export const initializeModalInputs = (modalType, taskID) => {
  const currentTask = taskManager.findTask(taskID);
  if (modalType === "move-task-modal") {
    const unavaliableCategory = taskCategories.find(
      (category) => category === currentTask.category
    );
    const availableCategories = taskCategories.filter(
      (categories) => categories != unavaliableCategory
    );

    return { unavaliableCategory, availableCategories };
  }
  if (modalType === "edit-task-modal") {
    const taskName = currentTask.name;
    const taskDescription = currentTask.description;

    return { taskName, taskDescription };
  }
};
