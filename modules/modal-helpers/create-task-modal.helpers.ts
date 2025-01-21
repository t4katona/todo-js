import { CreateTaskModalInputs } from "../../interfaces/modal/create-task-modal-inputs";
export const getCreateTaskModalFormInputs = (): CreateTaskModalInputs => {
  const nameInputElement = document.getElementById(
    "task-name"
  ) as HTMLInputElement;
  const descriptionInputElement = document.getElementById(
    "task-description"
  ) as HTMLInputElement;
  const nameInputValue: string = nameInputElement.value;

  const descriptionInputValue: string = descriptionInputElement.value;
  const categoryInput = document.getElementsByName(
    "radio"
  ) as NodeListOf<HTMLInputElement>;
  let selectedCategoryInputValue: string = "";
  for (let i = 0; i < categoryInput.length; i++) {
    if (categoryInput[i].checked)
      selectedCategoryInputValue = categoryInput[i].value;
  }
  return {
    name: nameInputValue,
    description: descriptionInputValue,
    category: selectedCategoryInputValue,
  };
};
