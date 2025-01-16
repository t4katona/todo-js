// Closes the dropdown whenever user clicks outside of it
(() => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".task-more-actions-container")) {
      document
        .querySelectorAll(".task-more-action-items-container")
        .forEach((container) => {
          container.style.display = "none";
        });
    }
  });
})();
