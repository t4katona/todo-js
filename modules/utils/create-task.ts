import { taskManager } from "../task-manager";
import { generateColors } from "./generate-task-colors";
import { Task } from "../../interfaces/task.interfaces";
import { CreateTaskModalInputs } from "../../interfaces/modal/create-task-modal-inputs";

export const formTask = (taskInputs: CreateTaskModalInputs): Task => {
  const newTask: Task = {
    id: Math.random().toString(36).substring(2, 12),
    name: taskInputs.name,
    description: taskInputs.description,
    category: taskInputs.category,
    backgroundColor: generateColors(taskInputs.category).backgroundColor,
    borderColor: generateColors(taskInputs.category).borderColor,
  };

  return newTask;
};
