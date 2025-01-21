export const getCreateTaskModalFormInputs = () => {
    const nameInputElement = document.getElementById("task-name");
    const descriptionInputElement = document.getElementById("task-description");
    const nameInputValue = nameInputElement.value;
    const descriptionInputValue = descriptionInputElement.value;
    const categoryInput = document.getElementsByName("radio");
    let selectedCategoryInputValue = "";
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
