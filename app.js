// MODAL
const modalOpenBtn = document.getElementById("open-modal-btn");
const modalCloseBtn = document.getElementById("close-modal-btn");
const modalInnerCloseBtn = document.getElementById("inner-close-modal-btn");
const modalOverlay = document.getElementById("modal-overlay");
const modalCreateTask = document.getElementById("createTask");

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

// ** Creating todo card **

// * Get modal form inputs
const getTaskInputs = () => {
  const nameInput = document.getElementById("task-name").value;
  const descriptionInput = document.getElementById("task-description").value;
  const categoryInput = document.getElementsByName("radio");
  let selectedCategoryInput = "";
  for (i = 0; i < categoryInput.length; i++) {
    if (categoryInput[i].checked)
      selectedCategoryInput = categoryInput[i].value;
  }

  return {
    nameInput,
    descriptionInput,
    selectedCategoryInput,
  };
};

// * Arrange task to selected category
function arrangeTaskToCategory(todoCategory, todoCard) {
  const categoryInProgress = document.getElementById(
    "todo-category-inProgress"
  );
  const categoryCompleted = document.getElementById("todo-category-completed");
  const categoryOnHold = document.getElementById("todo-category-onHold");
  const categoryTodo = document.getElementById("todo-category-todo");

  switch (todoCategory) {
    case "todo":
      categoryTodo.appendChild(todoCard);
      break;
    case "inProgress":
      categoryInProgress.appendChild(todoCard);
      break;
    case "completed":
      categoryCompleted.appendChild(todoCard);
      break;
    case "onHold":
      categoryOnHold.appendChild(todoCard);
      break;

    default:
      categoryTodo.appendChild(todoCard);
      break;
  }
}

const createHTMLElement = (htmlElement, className, ID) => {
  const tempElement = document.createElement(htmlElement);
  if (className) {
    className.forEach((classes) => {
      tempElement.classList.add(classes);
    });
  }
  if (ID) tempElement.id = ID;
  return tempElement;
};

// * Creating todo card
function createTodoCard(todoInputs) {
  const todoDetails = {
    name: todoInputs.nameInput,
    description: todoInputs.descriptionInput,
    category: todoInputs.selectedCategoryInput,
  };

  const todoCard = createHTMLElement("div", ["todo-card"]);

  const todoCardHeading = createHTMLElement("div", ["todo-card-heading"]);

  const todoH3 = createHTMLElement("h3", ["roboto-medium"]);
  todoH3.innerHTML = todoDetails.name;

  const todoBtnContainer = createHTMLElement("div", ["todo-btn-conatiner"]);

  const todoDeleteBtn = createHTMLElement("button", ["btn", "icon-btn"]);
  // Delete task
  todoDeleteBtn.addEventListener("click", () => parentElement.remove());

  const todoDeleteBtnImage = createHTMLElement("img");
  todoDeleteBtnImage.src = "./assets/trash.svg";
  todoDeleteBtnImage.alt = "Icon to delete task";

  const todoMoveBtn = createHTMLElement("button", ["btn", "icon-btn"]);

  const todoMoveBtnImage = createHTMLElement("img");
  todoMoveBtnImage.src = "./assets/arrow-up-right.svg";
  todoMoveBtnImage.alt = "Icon move task to another category";

  const todoDescription = createHTMLElement("p", ["todo-description"]);
  todoDescription.innerHTML = todoDetails.description;

  // Attach elements together
  todoDeleteBtn.appendChild(todoDeleteBtnImage);
  todoMoveBtn.appendChild(todoMoveBtnImage);

  todoBtnContainer.appendChild(todoDeleteBtn);
  todoBtnContainer.appendChild(todoMoveBtn);

  todoCardHeading.appendChild(todoH3);
  todoCardHeading.appendChild(todoBtnContainer);

  todoCard.appendChild(todoCardHeading);
  todoCard.appendChild(todoDescription);

  arrangeTaskToCategory(todoDetails.category, todoCard);
}

modalCreateTask.addEventListener("click", (e) => {
  e.preventDefault();
  createTodoCard(getTaskInputs());
  modalOverlay.classList.remove("show-modal");
});
