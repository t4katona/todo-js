import { taskManager } from "../task-manager";
import { taskCategories } from "../constants/task-categories";
import { Task } from "../../interfaces/task.interfaces";
import { ModalInputs } from "../../types/initialize-modal-inputs-return.types";
export const initializeModalInputs = (
  modalType: string,
  taskID: string
): ModalInputs | undefined => {
  const currentTask: Task = taskManager.findTask(taskID);
  if (modalType === "move-task-modal") {
    const unavaliableCategory: string =
      taskCategories.find((category) => category === currentTask.category) ||
      ""; // <-- if find returns empty
    const availableCategories: string[] = taskCategories.filter(
      (categories) => categories != unavaliableCategory
    );

    return { unavaliableCategory, availableCategories };
  }
  if (modalType === "edit-task-modal") {
    const name: string = currentTask.name;
    const description: string = currentTask.description;

    return { name, description };
  }
};
