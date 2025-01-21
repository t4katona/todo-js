// Closes the dropdown whenever user clicks outside of it
(() => {
  document.addEventListener("click", (e) => {
    const target = e.target as Element;
    if (!target.closest(".task-more-actions-container")) {
      document
        .querySelectorAll(".task-more-action-items-container")
        .forEach((container) => {
          (container as HTMLElement).style.display = "none";
        });
    }
  });
})();
