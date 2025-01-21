import { initializeModalInputs } from "./initialize-modal-inputs.helpers.js";
const nameInputField = document.getElementById("task-edited-name");
const descriptionInputField = document.getElementById("task-edited-description");
export const setEditTaskModalInputs = (taskID) => {
    const modalInputs = initializeModalInputs("edit-task-modal", taskID);
    if (modalInputs && "name" in modalInputs && "description" in modalInputs) {
        const { name, description } = modalInputs;
        nameInputField.value = name;
        descriptionInputField.value = description;
    }
    else {
        throw new Error("Unable to get modal inputs");
    }
};
67;
export const getEditTaskModalInputs = () => {
    const name = nameInputField === null || nameInputField === void 0 ? void 0 : nameInputField.value;
    const description = descriptionInputField === null || descriptionInputField === void 0 ? void 0 : descriptionInputField.value;
    return { name, description };
};
