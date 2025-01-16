import { initializeModalInputs } from "./initialize-modal-inputs.helpers.js";
import {
  disabledInput,
  options,
} from "../constants/ui-dom-elements.constants.js";

export const setMoveTaskModalInputs = (taskID) => {
  const inputs = initializeModalInputs("move-task-modal", taskID);
  disabledInput.value = inputs.unavaliableCategory;
  // * Set available inputs
  for (let i = 0; i < options.length; i++) {
    options[i].value = inputs.availableCategories[i];
    options[i].text = inputs.availableCategories[i];
  }
};
