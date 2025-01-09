import { renderTasks, generateTaskColor } from "./taskUI.js";
import { saveTaskToStorage, deleteTaskFromStorage } from "./taskStore.js";

// Check localStorage on reload
window.onload = () => {
  if (localStorage.length != 0) {
    createdTasks = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(key));
      createdTasks.push(item);
      renderTasks();
    }
  }
};

// ** Create Tasks **
let createdTasks = [];
const taskCategories = ["To-Do", "In Progress", "Completed", "On Hold"];

// * Get modal form inputs
const getModalFormInputs = () => {
  const nameInput = document.getElementById("task-name").value;
  const descriptionInput = document.getElementById("task-description").value;
  const categoryInput = document.getElementsByName("radio");
  let selectedCategoryInput = "";
  for (let i = 0; i < categoryInput.length; i++) {
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
function arrangeTaskToCategory(taskCategory, todoCard) {
  const categoryInProgress = document.getElementById(
    "todo-category-inProgress"
  );
  const categoryCompleted = document.getElementById("todo-category-completed");
  const categoryOnHold = document.getElementById("todo-category-onHold");
  const categoryTodo = document.getElementById("todo-category-todo");

  switch (taskCategory) {
    case "To-Do":
      categoryTodo.appendChild(todoCard);
      break;
    case "In Progress":
      categoryInProgress.appendChild(todoCard);
      break;
    case "Completed":
      categoryCompleted.appendChild(todoCard);
      break;
    case "On Hold":
      categoryOnHold.appendChild(todoCard);
      break;

    default:
      categoryTodo.appendChild(todoCard);
      break;
  }
}

// ** Create task **
function createTask(taskInputs) {
  const newTask = {
    id: Math.random().toString(36).substring(2, 12),
    name: taskInputs.nameInput,
    description: taskInputs.descriptionInput,
    category: taskInputs.selectedCategoryInput,
    backgroundColor: generateTaskColor().backgroundColor,
    borderColor: generateTaskColor().borderColor,
  };
  createdTasks.push(newTask);
  saveTaskToStorage(newTask);
  renderTasks();
}

// ** Update created tasks **
function updateCreatedTasks(updatedTasks) {
  createdTasks = updatedTasks;
}

// ** Delete tasks **
function deleteTask(taskID) {
  createdTasks = createdTasks.filter((task) => task.id !== taskID);
  deleteTaskFromStorage(taskID);
}

// ** Find task **
function findTask(taskID) {
  return createdTasks.find((task) => {
    return task.id === taskID;
  });
}

// ** Initial setup for 'Movel Task' modal inputs **
function initializeTaskMoveModalInputs(taskID) {
  const currentTask = findTask(taskID);
  const unavaliableCategory = taskCategories.find(
    (category) => category === currentTask.category
  );
  const availableCategories = taskCategories.filter(
    (categories) => categories != unavaliableCategory
  );

  return { unavaliableCategory, availableCategories };
}

// ** Handle task category change **
function handleCategoryChange(selectedInput, currentTask) {
  currentTask.category = selectedInput;
}

export {
  createTask,
  getModalFormInputs,
  renderTasks,
  arrangeTaskToCategory,
  createdTasks,
  deleteTask,
  taskCategories,
  initializeTaskMoveModalInputs,
  handleCategoryChange,
  findTask,
};
