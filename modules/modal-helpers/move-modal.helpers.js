import { taskManager } from "../task-manager.js";
import { taskCategories } from "../constants/task-categories.js";
import {
  disabledInput,
  options,
} from "../constants/ui-dom-elements.constants.js";

const initializeTaskMoveModalInputs = (taskID) => {
  const currentTask = taskManager.findTask(taskID);
  const unavaliableCategory = taskCategories.find(
    (category) => category === currentTask.category
  );
  const availableCategories = taskCategories.filter(
    (categories) => categories != unavaliableCategory
  );

  return { unavaliableCategory, availableCategories };
};

export const setMoveTaskModalInputs = (taskID) => {
  const inputs = initializeTaskMoveModalInputs(taskID);
  disabledInput.value = inputs.unavaliableCategory;

  // * Set available inputs
  for (let i = 0; i < options.length; i++) {
    options[i].value = inputs.availableCategories[i];
    options[i].text = inputs.availableCategories[i];
  }
};
