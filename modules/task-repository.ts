import { Store } from "./store";
import { generateColors } from "./utils/generate-task-colors";
import { Task } from "../interfaces/task.interfaces";
import { TaskDetails } from "../interfaces/task/task-details.interfaces";

class TaskRepository extends Store {
  tasks: Task[] = [];
  constructor() {
    super("tasks");
    this.tasks = this.loadData();
  }

  createTask(task: Task): void {
    this.tasks.push(task);
    this.save(this.tasks);
  }

  deleteTask(taskID: string): void {
    this.tasks = this.tasks.filter(({ id }) => id !== taskID);
    this.save(this.tasks);
  }

  findTask(taskID: string): Task {
    const task = this.tasks.find(({ id }) => id === taskID);
    if (!task) {
      throw new Error(`Task with ID ${taskID} not found`);
    }
    return task;
  }

  findAllTasks(): Task[] {
    return this.tasks;
  }

  // updating task object's colors
  updateColors(task: Task): void {
    task.backgroundColor = generateColors(task.category).backgroundColor;
    task.borderColor = generateColors(task.category).borderColor;
  }

  updateCategory(task: Task, newCategory: string): void {
    task.category = newCategory;
    this.updateColors(task);
    this.save(this.tasks);
  }

  updateTask(task: Task, updatedTaskDetails: TaskDetails): void {
    task.name = updatedTaskDetails.name;
    task.description = updatedTaskDetails.description;
    this.save(this.tasks);
  }
}

export const taskRepository = new TaskRepository();
