import { taskManager } from "../task-manager";
import { Task } from "../../interfaces/task.interfaces";

export const generateTaskElement = (task: Task): HTMLDivElement => {
  const todoCard: HTMLDivElement = document.createElement("div");
  todoCard.style.backgroundColor = task.backgroundColor;

  todoCard.style.borderColor = task.borderColor;
  todoCard.classList.add("todo-card");
  todoCard.dataset.id = task.id;
  taskManager.arrangeTaskToCategory(task, todoCard);
  todoCard.innerHTML = `
    <div class="todo-card-heading">
        <h3 class="roboto-medium">${task.name}</h3>
        <div class="task-more-actions-container">
        <button class="btn icon-btn task-more-btn">
          <img src="assets/more.svg" alt="Icon to more actions" />
        </button>
        <div class="task-more-action-items-container">
          <ul>
          <li>
            <button class="btn icon-btn task-edit-btn">
              <img src="assets/edit.svg" alt="Icon for edit task" />
              <p class="p">Edit</p>
            </button>
          </li>
            <li>
              <button class="btn icon-btn task-move-btn">
                <img src="assets/arrow-up-right.svg" alt="Icon to move task" />
                <p class="p">Move</p>
              </button>
            </li>
            <li>
              <button class="btn icon-btn task-delete-btn">
                <img src="assets/trash.svg" alt="Icon to delete task" />
                <p class="p">Delete</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="todo-description">
    ${task.description}
    </p>
    `;

  return todoCard;
  /*
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
     */
};
