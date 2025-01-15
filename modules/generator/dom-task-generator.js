import { taskManager } from "../task-manager.js";

export const generateTaskElement = (task) => {
  const todoCard = document.createElement("div");
  todoCard.style.backgroundColor = task.backgroundColor;
  todoCard.style.borderColor = task.borderColor;
  todoCard.classList.add("todo-card");
  todoCard.dataset.id = task.id;
  taskManager.arrangeTaskToCategory(task, todoCard);
  return (todoCard.innerHTML = `
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
    `);
};
