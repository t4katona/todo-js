import { generateColors } from "./generate-task-colors";
import { Task } from "../../interfaces/task.interfaces";
export const updateTaskElementColors = (
  task: Task,
  taskElement: HTMLDivElement
) => {
  taskElement.style.backgroundColor = generateColors(
    task.category
  ).backgroundColor;
  taskElement.style.borderColor = generateColors(task.category).borderColor;
};
