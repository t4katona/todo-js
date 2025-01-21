import { taskColors } from "../constants/task-colors.constants";

export const generateColors = (
  taskCategory: string
): { backgroundColor: string; borderColor: string } => {
  let backgroundColor: string = "white"; // default color;
  let borderColor: string = "white"; // default;
  taskColors.forEach((element) => {
    if (taskCategory === element.category) {
      backgroundColor = element.backgroundColor;
      borderColor = element.borderColor;
    }
  });
  return { backgroundColor, borderColor };
};

/*
export const generateColors = (taskCategory: string): {backgroundColor: string, borderColor: string} => {
  let backgroundColor: string | null = null;
  let borderColor: string | null = null;
  taskColors.forEach((element) => {
    if (taskCategory === element.category) {
      backgroundColor = element.backgroundColor;
      borderColor = element.borderColor;
    }
  });
  return { backgroundColor, borderColor };
};*/
