import { UI } from "./task-ui.js";
import { taskRepository as mainTaskRepository } from "./task-repository.js";
import { formTask } from "./utils/create-task.js";
import { categories, dropdown } from "./constants/ui-dom-elements.constants.js";
import { updateTaskElementColors } from "./utils/update-task-element-colors.js";
import { modals } from "./constants/ui-dom-elements.constants.js";
export class TaskManager {
    constructor() {
        this.taskRepository = mainTaskRepository;
        this.createdTasks = [];
    }
    addTask(taskInputs) {
        this.taskRepository.createTask(formTask(taskInputs));
        UI.renderTasks();
        UI.renderTaskCounters();
    }
    deleteTask(taskID) {
        this.taskRepository.deleteTask(taskID);
        const taskElement = document.querySelector(`[data-id="${taskID}"]`);
        if (taskElement) {
            taskElement.classList.add("remove");
            setTimeout(() => {
                taskElement.remove();
                UI.renderTaskCounters();
            }, 300);
        }
    }
    findTask(taskID) {
        return this.taskRepository.findTask(taskID);
    }
    getCreatedTasks() {
        return this.taskRepository.findAllTasks();
    }
    updateTaskCategory() {
        var _a;
        if (!((_a = modals.modalCategoryChange) === null || _a === void 0 ? void 0 : _a.dataset.id)) {
            throw new Error("Modal element is not found");
        }
        const task = this.findTask(modals.modalCategoryChange.dataset.id);
        const selectedCategory = dropdown.value;
        const taskElement = document.querySelector(`[data-id="${task.id}"]`);
        if (!taskElement) {
            throw new Error(`Element does not found`);
        }
        this.taskRepository.updateCategory(task, selectedCategory);
        updateTaskElementColors(task, taskElement);
        this.arrangeTaskToCategory(task, taskElement);
        UI.renderTaskCounters();
    }
    arrangeTaskToCategory(task, taskElement) {
        // for moving
        if (taskElement && taskElement.parentElement) {
            taskElement.parentElement.removeChild(taskElement);
        }
        switch (task.category) {
            case "To-Do":
                categories.categoryTodo.appendChild(taskElement);
                break;
            case "In Progress":
                categories.categoryInProgress.appendChild(taskElement);
                break;
            case "Completed":
                categories.categoryCompleted.appendChild(taskElement);
                break;
            case "On Hold":
                categories.categoryOnHold.appendChild(taskElement);
                break;
            default:
                categories.categoryTodo.appendChild(taskElement);
                break;
        }
    }
    editTask(updatedTaskDetails) {
        var _a;
        if (!((_a = modals.modalEditTask) === null || _a === void 0 ? void 0 : _a.dataset.id)) {
            throw new Error("Modal element is not found");
        }
        const task = this.findTask(modals.modalEditTask.dataset.id);
        this.taskRepository.updateTask(task, updatedTaskDetails);
        //update task in dom
        UI.renderTasks();
    }
}
export const taskManager = new TaskManager();
