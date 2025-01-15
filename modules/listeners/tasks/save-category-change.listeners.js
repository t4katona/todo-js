import {
  modals,
  buttons,
  options,
} from "../../constants/ui-dom-elements.constants.js";

import { taskManager } from "../../task-manager.js";

(() => {
  buttons.saveCategoryChange.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedCategory = options[dropdown.selectedIndex].value;
    const task = taskManager.findTask(modals.modalCategoryChange.dataset.id);
    taskManager.updateTaskCategory(task, selectedCategory);
    modals.modalOverlay.classList.remove("show-modal");
  });
})();
