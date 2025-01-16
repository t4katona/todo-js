import { containers } from "../../../constants/ui-dom-elements.constants.js";

(() => {
  containers.todosContainer.addEventListener("click", (e) => {
    const moreBtn = e.target.closest(".task-more-btn");
    const actionsContainer = moreBtn.parentElement.querySelector(
      ".task-more-action-items-container"
    );
    actionsContainer.style.display = "block";
  });
})();
