export function createEditForm() {
    const toDoScreen = document.querySelector('.to-do-screen');

    const formContainer = document.createElement('div');
    formContainer.classList.add('edit-form-container'); 

    const form = document.createElement('form');
    form.classList.add('edit-form');

    const titleLabel = document.createElement('label');
    titleLabel.classList.add('edit-title-label');
    titleLabel.textContent = 'To-Do Title:';

    const titleInput = document.createElement('input');
    titleInput.classList.add('edit-title-input');
    titleInput.type = 'text';

    const descriptionLabel = document.createElement('label');
    descriptionLabel.classList.add('edit-description-label');
    descriptionLabel.textContent = 'To-Do Description:';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('edit-description-input');

    const taskLabel = document.createElement('label');
    taskLabel.classList.add('edit-task-label');
    taskLabel.textContent = 'Add Task:';

    const taskInput = document.createElement('input');
    taskInput.classList.add('edit-task-input');
    taskInput.type = 'text';

    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn-edit');
    saveBtn.textContent = 'Save';

    form.append(titleLabel, titleInput, descriptionLabel, descriptionInput, taskLabel, taskInput, saveBtn);
    formContainer.append(form);
    toDoScreen.append(formContainer);
}

export function createProjectForm() {
    const main = document.querySelector('main');

    const newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('new-project-container');

    const form = document.createElement('form');
    form.classList.add('new-project-form');

    const projectTitleLabel = document.createElement('label');
    projectTitleLabel.classList.add('project-title-label');
    projectTitleLabel.textContent = 'Project Name:';

    const projectTitleInput = document.createElement('input');
    projectTitleInput.classList.add('project-title-input');
    projectTitleInput.type = 'text';

    const projectDescriptionLabel = document.createElement('label');
    projectDescriptionLabel.classList.add('project-description-label');
    projectDescriptionLabel.textContent = 'Project Description:';

    const projectDescriptionInput = document.createElement('textarea');
    projectDescriptionInput.classList.add('project-description-input');

    const saveProjectBtn = document.createElement('button');
    saveProjectBtn.classList.add('save-project-btn');
    saveProjectBtn.textContent = 'Save Project';

    function saveProject() {
        saveProjectBtn.addEventListener('click', () => {
            console.log('Project Saved')
        });
    }

    form.append(projectTitleLabel, projectTitleInput, projectDescriptionLabel, projectDescriptionInput, saveProjectBtn);
    newProjectContainer.append(form);
    main.append(newProjectContainer);
}

export function addToDoForm() {
    const main = document.querySelector('main');

    let index = 0;

    const addTodoContainer = document.createElement('div');
    addTodoContainer.classList.add('add-todo-container');

    const form = document.createElement('form');
    form.classList.add('add-todo-form');

    const taskLabel = document.createElement('label');
    taskLabel.classList.add('task-label');
    taskLabel.textContent = 'Add Task:';

    const todoTaskInput = document.createElement('input');
    todoTaskInput.classList.add(`todo-task-input-${index}`);
    todoTaskInput.type = 'text';

    const addMoreTasksBtn = document.createElement('button');
    addMoreTasksBtn.classList.add('add-more-tasks-btn');
    addMoreTasksBtn.textContent = 'Add New Task';

    const saveTodoBtn = document.createElement('button');
    saveTodoBtn.classList.add('save-todo-btn');
    saveTodoBtn.textContent = 'Save Task(s)';

    addMoreTasksBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`New task input added: ${index}`);
        index++;
        todoTaskInput;
        todoTaskInput.classList.add(`todo-task-input-${index}`);
    });

    form.append(taskLabel, todoTaskInput, addMoreTasksBtn, saveTodoBtn);
    addTodoContainer.append(form);
    main.append(addTodoContainer);
}
