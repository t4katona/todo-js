import { initializeModalInputs } from "./initialize-modal-inputs.helpers";
import { disabledInput, options, } from "../constants/ui-dom-elements.constants.js";
export const setMoveTaskModalInputs = (taskID) => {
    const modalInputs = initializeModalInputs("move-task-modal", taskID);
    if (modalInputs &&
        "unavaliableCategory" in modalInputs &&
        "availableCategories" in modalInputs) {
        const { unavaliableCategory, availableCategories } = modalInputs;
        disabledInput.value = modalInputs.unavaliableCategory;
        // * Set available inputs
        for (let i = 0; i < options.length; i++) {
            options[i].value = modalInputs.availableCategories[i];
            options[i].text = modalInputs.availableCategories[i];
        }
    }
};
