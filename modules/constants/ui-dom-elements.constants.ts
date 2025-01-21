// * Change categories
export const disabledInput = document.getElementById(
  "disabledInput"
) as HTMLInputElement;
export const dropdown = document.getElementById(
  "dropdown"
) as HTMLSelectElement;
export const options = dropdown.options as HTMLOptionsCollection;

export const modals = {
  modalOverlay: document.getElementById("modal-overlay") as HTMLElement,
  modalCreateTask: document.getElementById("modal-create-task") as HTMLElement,
  modalCategoryChange: document.getElementById(
    "modal-category-change"
  ) as HTMLElement,
  modalEditTask: document.getElementById("modal-edit-task") as HTMLElement,
};

export const buttons = {
  createTaskModalOpenBtn: document.getElementById(
    "create-task-modal-open-btn"
  ) as HTMLButtonElement,
  createTaskBtn: document.getElementById(
    "create-task-btn"
  ) as HTMLButtonElement,
  modalClosingBtns: [...document.getElementsByClassName("btn-close-modal")],
  saveCategoryChange: document.getElementById(
    "save-category-change"
  ) as HTMLButtonElement,
  editTaskModalOpenBtn: document.getElementsByClassName("task-edit-btn"),
  saveEditedTask: document.getElementById(
    "save-edited-task-btn"
  ) as HTMLButtonElement,
};

export const counters = {
  counterTodo: document.getElementById(
    "task-counter-todo"
  ) as HTMLParagraphElement,
  counterInProgress: document.getElementById(
    "task-counter-inProgress"
  ) as HTMLParagraphElement,
  counterCompleted: document.getElementById(
    "task-counter-completed"
  ) as HTMLParagraphElement,
  counterOnHold: document.getElementById(
    "task-counter-onHold"
  ) as HTMLParagraphElement,
};

export const containers = {
  todoContainer: document.getElementById(
    "todo-category-todo"
  ) as HTMLDivElement,
  inProgressContainer: document.getElementById(
    "todo-category-inProgress"
  ) as HTMLDivElement,
  completedContainer: document.getElementById(
    "todo-category-completed"
  ) as HTMLDivElement,
  onHoldContainer: document.getElementById(
    "todo-category-onHold"
  ) as HTMLDivElement,

  todosContainer: document.querySelector(".todos-container") as Element,
};

export const categories = {
  categoryInProgress: document.getElementById(
    "todo-category-inProgress"
  ) as HTMLDivElement,
  categoryCompleted: document.getElementById(
    "todo-category-completed"
  ) as HTMLDivElement,
  categoryOnHold: document.getElementById(
    "todo-category-onHold"
  ) as HTMLDivElement,
  categoryTodo: document.getElementById("todo-category-todo") as HTMLDivElement,
};
