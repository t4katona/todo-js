// ** Save task ** //
function saveTask(task) {
  console.log("task: ", task);
  localStorage.setItem(task.id, JSON.stringify(task));
}

export { saveTask };
