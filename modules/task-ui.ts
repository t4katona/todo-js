import { taskManager } from "./task-manager";
import { renderTasks } from "./renderer/tasks-renderer";
import { renderTaskCounters } from "./renderer/task-counter-renderer";
import "./listeners/modals/open-modals.listeners";
import "./listeners/modals/close-modals.listeners";
import "./listeners/tasks/create-task.listeners";
import "./listeners/tasks/delete-task.listeners";
import "./listeners/tasks/save/save-category-change.listeners";
import "./listeners/tasks/open-close/open-more-task-actions.listeners";
import "./listeners/tasks/open-close/close-more-task-actions.listeners";
import "./listeners/tasks/save/save-edit-task.listener";

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
