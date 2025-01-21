import { containers } from "../../../constants/ui-dom-elements.constants";
(() => {
    containers.todosContainer.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target;
        const moreBtn = target.closest(".task-more-btn");
        if (moreBtn === null || moreBtn === void 0 ? void 0 : moreBtn.parentElement) {
            const actionsContainer = moreBtn.parentElement.querySelector(".task-more-action-items-container");
            actionsContainer.style.display = "block";
        }
    });
})();
