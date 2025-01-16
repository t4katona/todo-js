// * Change categories
export const disabledInput = document.getElementById("disabledInput");
export const dropdown = document.getElementById("dropdown");
export const options = dropdown.options;

export const modals = {
  modalOverlay: document.getElementById("modal-overlay"),
  modalCreateTask: document.getElementById("modal-create-task"),
  modalCategoryChange: document.getElementById("modal-category-change"),
  modalEditTask: document.getElementById("modal-edit-task"),
};

export const buttons = {
  createTaskModalOpenBtn: document.getElementById("create-task-modal-open-btn"),
  createTaskBtn: document.getElementById("create-task-btn"),
  modalClosingBtns: [...document.getElementsByClassName("btn-close-modal")],
  saveCategoryChange: document.getElementById("save-category-change"),
  editTaskModalOpenBtn: document.getElementsByClassName("task-edit-btn"),
  saveEditedTask: document.getElementById("save-edited-task-btn"),
};

export const counters = {
  counterTodo: document.getElementById("task-counter-todo"),
  counterInProgress: document.getElementById("task-counter-inProgress"),
  counterCompleted: document.getElementById("task-counter-completed"),
  counterOnHold: document.getElementById("task-counter-onHold"),
};

export const containers = {
  todoContainer: document.getElementById("todo-category-todo"),
  inProgressContainer: document.getElementById("todo-category-inProgress"),
  completedContainer: document.getElementById("todo-category-completed"),
  onHoldContainer: document.getElementById("todo-category-onHold"),

  todosContainer: document.querySelector(".todos-container"),
};

export const categories = {
  categoryInProgress: document.getElementById("todo-category-inProgress"),
  categoryCompleted: document.getElementById("todo-category-completed"),
  categoryOnHold: document.getElementById("todo-category-onHold"),
  categoryTodo: document.getElementById("todo-category-todo"),
};
