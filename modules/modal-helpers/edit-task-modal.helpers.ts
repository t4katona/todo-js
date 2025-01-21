import { initializeModalInputs } from "./initialize-modal-inputs.helpers.js";
import { TaskDetails } from "../../interfaces/task/task-details.interfaces.js";
import { ModalInputs } from "../../types/initialize-modal-inputs-return.types.js";

const nameInputField = document.getElementById(
  "task-edited-name"
) as HTMLInputElement;
const descriptionInputField = document.getElementById(
  "task-edited-description"
) as HTMLInputElement;

export const setEditTaskModalInputs = (taskID: string): void => {
  const modalInputs = initializeModalInputs("edit-task-modal", taskID);

  if (modalInputs && "name" in modalInputs && "description" in modalInputs) {
    const { name, description } = modalInputs;
    nameInputField.value = name;
    descriptionInputField.value = description;
  } else {
    throw new Error("Unable to get modal inputs");
  }
};
67;
export const getEditTaskModalInputs = (): TaskDetails => {
  const name: string = nameInputField?.value;
  const description: string = descriptionInputField?.value;

  return { name, description };
};
