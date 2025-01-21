import { generateColors } from "./generate-task-colors";
export const formTask = (taskInputs) => {
    const newTask = {
        id: Math.random().toString(36).substring(2, 12),
        name: taskInputs.name,
        description: taskInputs.description,
        category: taskInputs.category,
        backgroundColor: generateColors(taskInputs.category).backgroundColor,
        borderColor: generateColors(taskInputs.category).borderColor,
    };
    return newTask;
};
