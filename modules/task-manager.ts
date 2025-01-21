import { UI } from "./task-ui.js";
import { taskRepository as mainTaskRepository } from "./task-repository.js";
import { formTask } from "./utils/create-task.js";
import { categories, dropdown } from "./constants/ui-dom-elements.constants.js";
import { updateTaskElementColors } from "./utils/update-task-element-colors.js";
import { modals } from "./constants/ui-dom-elements.constants.js";
import { Task } from "../interfaces/task.interfaces.js";
import { CreateTaskModalInputs } from "../interfaces/modal/create-task-modal-inputs";
import { TaskDetails } from "../interfaces/task/task-details.interfaces";

export class TaskManager {
  taskRepository = mainTaskRepository;
  createdTasks: Task[] = [];

  addTask(taskInputs: CreateTaskModalInputs): void {
    this.taskRepository.createTask(formTask(taskInputs));
    UI.renderTasks();
    UI.renderTaskCounters();
  }

  deleteTask(taskID: string): void {
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

  findTask(taskID: string): Task {
    return this.taskRepository.findTask(taskID);
  }

  getCreatedTasks(): Task[] {
    return this.taskRepository.findAllTasks();
  }

  updateTaskCategory(): void {
    if (!modals.modalCategoryChange?.dataset.id) {
      throw new Error("Modal element is not found");
    }
    const task: Task = this.findTask(modals.modalCategoryChange.dataset.id);
    const selectedCategory: string = dropdown.value;

    const taskElement: HTMLDivElement | null = document.querySelector(
      `[data-id="${task.id}"]`
    )!;

    if (!taskElement) {
      throw new Error(`Element does not found`);
    }
    this.taskRepository.updateCategory(task, selectedCategory);
    updateTaskElementColors(task, taskElement);
    this.arrangeTaskToCategory(task, taskElement);
    UI.renderTaskCounters();
  }

  arrangeTaskToCategory(task: Task, taskElement: HTMLElement) {
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

  editTask(updatedTaskDetails: TaskDetails): void {
    if (!modals.modalEditTask?.dataset.id) {
      throw new Error("Modal element is not found");
    }
    const task: Task = this.findTask(modals.modalEditTask.dataset.id);
    this.taskRepository.updateTask(task, updatedTaskDetails);
    //update task in dom
    UI.renderTasks();
  }
}

export const taskManager = new TaskManager();
