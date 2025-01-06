// MODAL
const modalOpenBtn = document.getElementById("open-modal-btn");
const modalCloseBtn = document.getElementById("close-modal-btn");
const modalInnerCloseBtn = document.getElementById("inner-close-modal-btn");
const modalOverlay = document.getElementById("modal-overlay");

// Open-close modal
modalOpenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalOverlay.classList.add("show-modal");
});

modalCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalOverlay.classList.remove("show-modal");
});

modalInnerCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalOverlay.classList.remove("show-modal");
});
