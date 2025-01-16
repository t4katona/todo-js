import { taskManager } from "./task-manager.js";
import { renderTasks } from "./renderer/tasks-renderer.js";
import { renderTaskCounters } from "./renderer/task-counter-renderer.js";
import "./listeners/modals/open-modals.listeners.js";
import "./listeners/modals/close-modals.listeners.js";
import "./listeners/tasks/create-task.listeners.js";
import "./listeners/tasks/delete-task.listeners.js";
import "./listeners/tasks/save-category-change.listeners.js";
import "./listeners/tasks/open-more-task-actions.listeners.js";
import "./listeners/tasks/close-more-task-actions.listeners.js";
import "./listeners/tasks/save-edit-task.listener.js";

window.onload = () => {
  if (taskManager.createdTasks) {
    renderTasks();
    renderTaskCounters();
  }
};

export const UI = {
  renderTasks,
  renderTaskCounters,
};
