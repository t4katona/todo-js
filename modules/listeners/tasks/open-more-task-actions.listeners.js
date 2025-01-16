import { containers } from "../../constants/ui-dom-elements.constants.js";

(() => {
  containers.todosContainer.addEventListener("click", (e) => {
    const moreBtn = e.target.closest(".task-more-btn");
    if (moreBtn) {
      const actionsContainer = moreBtn.parentElement.querySelector(
        ".task-more-action-items-container"
      );

      if (actionsContainer) {
        actionsContainer.style.display = "block";
      } else {
        console.error(
          "'.task-more-action-items-container' not found for this button"
        );
      }
    }
  });
})();
