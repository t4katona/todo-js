import { Store } from "./store.js";
import { generateColors } from "./utils/generate-task-colors.js";

class TaskRepository extends Store {
  tasks = [];
  constructor() {
    super("tasks");
    this.tasks = this.loadData();
  }

  createTask(task) {
    this.tasks.push(task);
    this.save(this.tasks);
  }

  deleteTask(taskID) {
    this.tasks = this.tasks.filter(({ id }) => id !== taskID);
    this.save(this.tasks);
  }

  findTask(taskID) {
    return this.tasks.find(({ id }) => id === taskID);
  }

  findAllTasks() {
    return this.tasks;
  }

  // updating task object's colors
  updateColors(task) {
    task.backgroundColor = generateColors(task.category).backgroundColor;
    task.borderColor = generateColors(task.category).borderColor;
  }

  updateCategory(task, newCategory) {
    task.category = newCategory;
    this.updateColors(task);
    this.save(this.tasks);
  }

  updateTask(task, updatedTaskDetails) {
    task.name = updatedTaskDetails.name;
    task.description = updatedTaskDetails.description;
    this.save(this.tasks);
  }
}

export const taskRepository = new TaskRepository();
