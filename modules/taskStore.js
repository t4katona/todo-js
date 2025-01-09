// ** Save task ** //
function saveTaskToStorage(task) {
  localStorage.setItem(task.id, JSON.stringify(task));
}

function deleteTaskFromStorage(taskID) {
  localStorage.removeItem(taskID);
}

export { saveTaskToStorage, deleteTaskFromStorage };
