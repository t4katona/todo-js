import { taskManager } from "../task-manager";
import { taskCategories } from "../constants/task-categories";
export const initializeModalInputs = (modalType, taskID) => {
    const currentTask = taskManager.findTask(taskID);
    if (modalType === "move-task-modal") {
        const unavaliableCategory = taskCategories.find((category) => category === currentTask.category) ||
            ""; // <-- if find returns empty
        const availableCategories = taskCategories.filter((categories) => categories != unavaliableCategory);
        return { unavaliableCategory, availableCategories };
    }
    if (modalType === "edit-task-modal") {
        const name = currentTask.name;
        const description = currentTask.description;
        return { name, description };
    }
};
