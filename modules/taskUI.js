import {
  createTask,
  getModalFormInputs,
  arrangeTaskToCategory,
  createdTasks,
  deleteTask,
  initializeTaskMoveModalInputs,
  handleCategoryChange,
  findTask,
} from "./taskManager.js";

let currentSelectedTask = null;

// Todos container
const todosContainer = document.querySelector(".todos-container");

// ** Modals **
const modalOverlay = document.getElementById("modal-overlay");
const modalCreateTask = document.getElementById("modal-create-task");
const modalCategoryChange = document.getElementById("modal-category-change");
const createTaskBtn = document.getElementById("create-task-btn");

// * Change categories
const disabledInput = document.getElementById("disabledInput");
const dropdown = document.getElementById("dropdown");
const options = dropdown.options;
const saveCategoryChange = document.getElementById("save-category-change");

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

saveCategoryChange.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedCategory = options[dropdown.selectedIndex].value;
  handleCategoryChange(selectedCategory, currentSelectedTask);
  renderTasks();
});

// ** Tasks **

// * Task background/border colors *
const taskColors = [
  { backgroundColor: "#F2D7EE", borderColor: "#E0A9C8" }, // Cotton Candy Cloud
  { backgroundColor: "#F9D5E5", borderColor: "#F1B2C6" }, // Mango Smoothie
  { backgroundColor: "#D6F5D6", borderColor: "#B8E5B5" }, // Mint Green
  { backgroundColor: "#F1D3E2", borderColor: "#F1A7C1" }, // Lavender Mist
  { backgroundColor: "#D3E6F4", borderColor: "#A6C7E1" }, // Baby Blue
  { backgroundColor: "#FFF4E5", borderColor: "#FFE1B2" }, // Peach Glow
  { backgroundColor: "#F4F5D9", borderColor: "#E0E1A8" }, // Lemon Cream
  { backgroundColor: "#D8F1E3", borderColor: "#A6D3B0" }, // Soft Mint
  { backgroundColor: "#E7E0F7", borderColor: "#D1C1E6" }, // Pastel Purple
  { backgroundColor: "#F5D1C4", borderColor: "#F0A6A0" }, // Blush Rose
  { backgroundColor: "#D9F1F1", borderColor: "#A6E4E4" }, // Soft Aqua
  { backgroundColor: "#E1F1D8", borderColor: "#C2E2A6" }, // Sage Green
  { backgroundColor: "#F4D1D1", borderColor: "#F1A6A6" }, // Pale Pink
  { backgroundColor: "#D9F0F5", borderColor: "#A6D6E1" }, // Sky Blue
  { backgroundColor: "#F1F2D8", borderColor: "#E2E6A6" }, // Buttercream
  { backgroundColor: "#F1D8D2", borderColor: "#F1B0A6" }, // Soft Coral
  { backgroundColor: "#E7F2D2", borderColor: "#C0E1A6" }, // Lemonade
  { backgroundColor: "#D9D1F1", borderColor: "#B6A6D9" }, // Lavender Mist
  { backgroundColor: "#F3E1F7", borderColor: "#D0A6E6" }, // Pink Orchid
  { backgroundColor: "#E5F1D8", borderColor: "#A9D6A6" }, // Fresh Mint
];

// * Generate task background color
const generateTaskColor = () => {
  const selectedColors = {};
  const random = Math.floor(Math.random() * taskColors.length - 1) + 1;
  taskColors.forEach((item, index) => {
    if (index === random) {
      selectedColors.backgroundColor = item.backgroundColor;
      selectedColors.borderColor = item.borderColor;
    }
  });

  return selectedColors;
};

// * Delete tasks
todosContainer.addEventListener("click", (e) => {
  if (e.target.closest(".task-delete-btn")) {
    const taskID = e.target.closest(".todo-card").dataset.id;
    deleteTask(taskID);
    renderTasks();
  }
});

// ** Set inputs for 'Move Task' modal **
function setMoveTaskModalInputs(taskID) {
  const inputs = initializeTaskMoveModalInputs(taskID);

  // * Set disabled input
  disabledInput.value = inputs.unavaliableCategory;

  // * Set available inputs
  for (let i = 0; i < options.length; i++) {
    options[i].value = inputs.availableCategories[i];
    options[i].text = inputs.availableCategories[i];
  }
}
// * Move tasks
todosContainer.addEventListener("click", (e) => {
  if (e.target.closest(".task-move-btn")) {
    const taskID = e.target.closest(".todo-card").dataset.id;
    modalOverlay.classList.add("show-modal");
    modalCreateTask.style.display = "none";
    modalCategoryChange.style.display = "block";
    currentSelectedTask = findTask(taskID);
    setMoveTaskModalInputs(taskID);
    renderTasks();
  }
});

// * Clear previous tasks for render *
const categoryContainers = document.querySelectorAll(
  ".todos-container-by-category"
);

// * Rendering tasks *
function renderTasks() {
  categoryContainers.forEach((container) => {
    container.innerHTML = "";
  });

  createdTasks.forEach((task) => {
    const todoCard = document.createElement("div");
    arrangeTaskToCategory(task.category, todoCard);
    todoCard.classList.add("todo-card");
    todoCard.style.backgroundColor = task.backgroundColor;
    todoCard.style.borderColor = task.borderColor;
    todoCard.dataset.id = task.id;

    todoCard.innerHTML = `
          <div class="todo-card-heading">
              <h3 class="roboto-medium">${task.name}</h3>
              <div class="todo-btn-conatiner">
                  <button class="btn icon-btn task-delete-btn">
                      <img src="assets/trash.svg" alt="Icon to delete task" />
                  </button>
                  <button class="btn icon-btn task-move-btn">
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

export { renderTasks, generateTaskColor };
