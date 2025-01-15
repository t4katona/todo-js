export const getCreateTaskModalFormInputs = () => {
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
