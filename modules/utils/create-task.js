import { taskManager } from "../task-manager.js";
import { generateColors } from "./generate-task-colors.js";

export const formTask = (taskInputs) => {
  const newTask = {
    id: Math.random().toString(36).substring(2, 12),
    name: taskInputs.nameInput,
    description: taskInputs.descriptionInput,
    category: taskInputs.selectedCategoryInput,
    backgroundColor: generateColors(taskInputs.selectedCategoryInput)
      .backgroundColor,
    borderColor: generateColors(taskInputs.selectedCategoryInput).borderColor,
  };

  return newTask;
};
