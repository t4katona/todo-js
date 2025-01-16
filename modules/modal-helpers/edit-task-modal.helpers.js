import { initializeModalInputs } from "./initialize-modal-inputs.helpers.js";

export const setEditTaskModalInputs = (taskID) => {
  const { taskName, taskDescription } = initializeModalInputs(
    "edit-task-modal",
    taskID
  );
  document.getElementById("task-edited-name").value = taskName;
  document.getElementById("task-edited-description").value = taskDescription;
};

export const getEditTaskModalInputs = () => {
  const name = document.getElementById("task-edited-name").value;
  const description = document.getElementById("task-edited-description").value;

  return { name, description };
};
