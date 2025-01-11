// ** Save task ** //
function saveTaskToStorage(task) {
  localStorage.setItem(task.id, JSON.stringify(task));
}

// ** Delete task ** //
function deleteTaskFromStorage(taskID) {
  localStorage.removeItem(taskID);
}

// ** Check if a value if a valid JSON ** //
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true
  } catch(err) {
    return false;
  }
}

export const store = { saveTaskToStorage, deleteTaskFromStorage, isValidJSON };
