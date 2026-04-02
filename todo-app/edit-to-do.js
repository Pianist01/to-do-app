export function editToDo() {
    const editBtn = document.querySelector('.edit-to-do');
    editBtn.addEventListener('click', () => {
        console.log('Edit button clicked');
        createEditForm();
    });
}

function createEditForm() {
    const toDoTitle = document.querySelector('.to-do-title');
    const toDoDescription = document.querySelector('.to-do-description');
    let title = prompt('Edit Title:');
    let description = prompt('Project Description:');
    toDoTitle.textContent = title;
    toDoDescription.textContent = description;
}