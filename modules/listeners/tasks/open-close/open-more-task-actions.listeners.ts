import { containers } from "../../../constants/ui-dom-elements.constants";

(() => {
  containers.todosContainer.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target as Element;
    const moreBtn = target.closest(".task-more-btn");

    if (moreBtn?.parentElement) {
      const actionsContainer = moreBtn.parentElement.querySelector(
        ".task-more-action-items-container"
      );

      (actionsContainer as HTMLElement).style.display = "block";
    }
  });
})();
