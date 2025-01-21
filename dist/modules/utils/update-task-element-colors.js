import { generateColors } from "./generate-task-colors";
export const updateTaskElementColors = (task, taskElement) => {
    taskElement.style.backgroundColor = generateColors(task.category).backgroundColor;
    taskElement.style.borderColor = generateColors(task.category).borderColor;
};
