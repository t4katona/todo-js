import {
  createTask,
  getModalFormInputs,
  arrangeTaskToCategory,
  createdTasks,
  deleteTask,
} from "./taskManager.js";

// * Todos container
const todosContainer = document.querySelector(".todos-container");

// ** Modals **
const modalOverlay = document.getElementById("modal-overlay");
const modalCreateTask = document.getElementById("modal-create-task");
const modalCategoryChange = document.getElementById("modal-category-change");
const createTaskBtn = document.getElementById("create-task-btn");

// * Open 'create task modal' btn
const createTaskModalOpenBtn = document.getElementById(
  "create-task-modal-open-btn"
);

// * Modal button actions *
const modalClosingBtns = [
  ...document.getElementsByClassName("btn-close-modal"),
];

createTaskModalOpenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalOverlay.classList.add("show-modal");
  modalCreateTask.style.display = "block";
  modalCategoryChange.style.display = "none";
});

modalClosingBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modalOverlay.classList.remove("show-modal");
  });
});

createTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createTask(getModalFormInputs());
});

// ** Tasks **

// * Task background colors *
const taskBackgroundColors = [
  "#E6E6FA",
  "#FADADD",
  "#BFEFFF",
  "#C1E1C1",
  "#FFDAB9",
  "#F08080",
  "#FFFACD",
  "#B0E0E6",
  "#CCCCFF",
  "#F4C2C2",
];

// * Generate task background color
function generateBackground() {
  return taskBackgroundColors[
    Math.floor(Math.random() * taskBackgroundColors.length - 1) + 1
  ];
}

// * Delete tasks
todosContainer.addEventListener("click", (e) => {
  if (e.target.closest(".task-delete-btn")) {
    const taskID = e.target.closest(".todo-card").dataset.id;
    deleteTask(taskID);
    renderTasks();
  }
});

// * Clear previous tasks for render *
const categoryContainers = document.querySelectorAll(
  ".todos-container-by-category"
);
categoryContainers.forEach((container) => {
  container.innerHTML = "";
});

// * Rendering tasks *
function renderTasks() {
  categoryContainers.forEach((container) => {
    container.innerHTML = "";
  });
  createdTasks.forEach((task) => {
    const todoCard = document.createElement("div");
    arrangeTaskToCategory(task.category, todoCard);
    todoCard.classList.add("todo-card");
    todoCard.style.backgroundColor = generateBackground();
    todoCard.dataset.id = task.id;

    todoCard.innerHTML = `
      <div class="todo-card-heading">
          <h3 class="roboto-medium">${task.name}</h3>
          <div class="todo-btn-conatiner">
              <button class="btn icon-btn task-delete-btn">
                  <img src="assets/trash.svg" alt="Icon to delete task" />
              </button>
              <button class="btn icon-btn">
                  <img
                  src="assets/arrow-up-right.svg"
                  alt="Icon move task to another category"
                  />
              </button>
          </div>
      </div>
      <p class="todo-description">
      ${task.description}
      </p>
      `;
  });
}

export { renderTasks };
