import {
  modals,
  buttons,
  options,
} from "../../../constants/ui-dom-elements.constants.js";
import { taskManager } from "../../../task-manager.js";
import { modalClosingTransition } from "../../../constants/modal-close-transition.constant.js";

(() => {
  buttons.saveCategoryChange.addEventListener("click", (e) => {
    e.preventDefault();
    taskManager.updateTaskCategory();
    modals.modalOverlay.style.transition = modalClosingTransition;
    modals.modalOverlay.classList.remove("show-modal");
  });
})();
