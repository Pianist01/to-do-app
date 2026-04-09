import { createEditForm, createProjectForm, addToDoForm } from './dom.js';

export function editToDo() {
    const editBtn = document.querySelector('.edit-to-do');
    editBtn.addEventListener('click', () => {
        console.log('Edit button clicked');
        createEditForm();
    });
}

export function createTodoList(title, description, date, task) {
    let list = [];
    return {
        title: list.push(title),
        description: list.push(description),
        date: list.push(date),
        task: list.push(task)
    }
}

export function addProject() {
    const addProjectBtn = document.querySelector('.add-project');
    addProjectBtn.addEventListener('click', () => {
        console.log('Adding new project');
        createProjectForm();
    });
}

export function addTodo() {
    const newTodoBtn = document.querySelector('.add-to-do');
    newTodoBtn.addEventListener('click', () => {
        console.log('Adding new Todo');
        addToDoForm();
    });
}
