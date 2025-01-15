import { taskColors } from "../constants/task-colors.constants.js";

export const generateColors = (taskCategory) => {
  let backgroundColor = null;
  let borderColor = null;
  taskColors.forEach((element) => {
    if (taskCategory === element.category) {
      backgroundColor = element.backgroundColor;
      borderColor = element.borderColor;
    }
  });
  return { backgroundColor, borderColor };
};
