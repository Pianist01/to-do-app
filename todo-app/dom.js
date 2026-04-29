// export function createEditForm() {
//     const toDoScreen = document.querySelector('.to-do-screen');

//     const formContainer = document.createElement('div');
//     formContainer.classList.add('edit-form-container'); 

//     const form = document.createElement('form');
//     form.classList.add('edit-form');

//     const titleLabel = document.createElement('label');
//     titleLabel.classList.add('edit-title-label');
//     titleLabel.textContent = 'To-Do Title:';

//     const titleInput = document.createElement('input');
//     titleInput.classList.add('edit-title-input');
//     titleInput.type = 'text';

//     const descriptionLabel = document.createElement('label');
//     descriptionLabel.classList.add('edit-description-label');
//     descriptionLabel.textContent = 'To-Do Description:';

//     const descriptionInput = document.createElement('textarea');
//     descriptionInput.classList.add('edit-description-input');

//     const taskLabel = document.createElement('label');
//     taskLabel.classList.add('edit-task-label');
//     taskLabel.textContent = 'Add Task:';

//     const taskInput = document.createElement('input');
//     taskInput.classList.add('edit-task-input');
//     taskInput.type = 'text';

//     const saveBtn = document.createElement('button');
//     saveBtn.classList.add('save-btn-edit');
//     saveBtn.textContent = 'Save';

//     form.append(titleLabel, titleInput, descriptionLabel, descriptionInput, taskLabel, taskInput, saveBtn);
//     formContainer.append(form);
//     toDoScreen.append(formContainer);
// }

export function createProjectForm() {

    let index = 0;

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

    const saveProjectBtn = document.createElement('button');
    saveProjectBtn.classList.add('save-project-btn');
    saveProjectBtn.textContent = 'Save Project';

    function saveProject() {
        saveProjectBtn.addEventListener('click', () => {
            console.log('Project Saved')
        });
    }

    form.append(projectTitleLabel, projectTitleInput, saveProjectBtn);
    newProjectContainer.append(form);
    main.append(newProjectContainer);

    function createProject() {
        let project = [];
        return {
            addProjectName(name) {
                project.push(name);
            },
            getProject() {
                return [...project];
            }
        }
    }

    const newProject = createProject();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        index++;
        console.log('Project Submitted');
        newProject.addProjectName(projectTitleInput.value);
        console.log(newProject.getProject());
        form.reset();
        form.remove();
        newProjectContainer.remove();
        const userProjects = document.querySelector('.projects');
        const projectItem = document.createElement('li');
        projectItem.classList.add(`project-${index}`);
        projectItem.textContent = newProject.getProject();
        userProjects.append(projectItem);
    })
}

export function addToDoForm() {

    let index = 0;

    const main = document.querySelector('main');

    const addTodoContainer = document.createElement('div');
    addTodoContainer.classList.add('add-todo-container');

    const form = document.createElement('form');
    form.classList.add('add-todo-form');

    const taskLabel = document.createElement('label');
    taskLabel.classList.add('task-label');
    taskLabel.textContent = 'Add Task:';

    const todoTaskInput = document.createElement('input');
    todoTaskInput.classList.add('task-input');
    todoTaskInput.type = 'text';

    const taskDescriptionLabel = document.createElement('label');
    taskDescriptionLabel.classList.add('task-description-label');
    taskDescriptionLabel.textContent = 'Task Description:';

    const taskDescriptionInput = document.createElement('textarea');
    taskDescriptionInput.classList.add('task-description-input');

    const taskDueDateLabel = document.createElement('label');
    taskDueDateLabel.classList.add('task-due-date-label');
    taskDueDateLabel.textContent = 'Task Due Date:';

    const saveTodoBtn = document.createElement('button');
    saveTodoBtn.classList.add('save-todo-btn');
    saveTodoBtn.textContent = 'Save Task(s)';

    const taskDueDateInput = document.createElement('input');
    taskDueDateInput.classList.add('task-due-date-input');
    taskDueDateInput.type = 'date';

    form.append(taskLabel, todoTaskInput, taskDescriptionLabel, taskDescriptionInput, taskDueDateLabel, taskDueDateInput, saveTodoBtn);
    addTodoContainer.append(form);
    main.append(addTodoContainer);

    const toDo = createTask();
    console.log('Created toDo object:', toDo);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        index++;
        console.log('Form Submitted');
        toDo.addTitle(todoTaskInput.value);
        toDo.addDescription(taskDescriptionInput.value);
        toDo.addDate(taskDueDateInput.value);
        console.log(toDo.getList());
        form.reset();
        form.remove();
        const todoList = document.querySelector('.todos');
        const toDoItem = document.createElement('li');
        const toDoInput = document.createElement('input');
        toDoInput.type = 'checkbox';
        const toDoLabel = document.createElement('label');
        toDoLabel.textContent = ` ${toDo.getList()[0]} - ${toDo.getList()[1]} - Deadline: ${toDo.getList()[2]}`;
        toDoItem.classList.add(`todo-${index}`);
        toDoItem.append(toDoInput, toDoLabel);
        todoList.append(toDoItem);
        addTodoContainer.remove();
    });
}

 function createTask() {
        let list = [];
        return {
            addTitle(task) {
                list.push(task);
            },
            addDescription(description) {
                list.push(description);
            },
            addDate(date) {
                list.push(date);
            },
            getList() {
                return [...list];
            }
        }
}

export function editTask() {
    let index = 0;

    const editTaskOne = document.querySelector('.edit-task-1');
    editTaskOne.addEventListener('click', () => {
        console.log('Edit 1 Clicked');
    });

    function createEditForm() {
        const main = document.querySelector('main');

        const editTaskContainer = document.createElement('div');
        editTaskContainer.classList.add('edit-task-container');

        const editForm = document.createElement('form');
        editForm.classList.add('edit-task-form');

        const taskName = document.createElement('label');
        taskName.classList.add('edit-task-name');
        taskName.textContent = 'Edit Task Name:';

        const taskNameInput = document.createElement('input');
        taskNameInput.classList.add('edit-task-name-input');
        taskNameInput.type = 'text';

        const taskDescription = document.createElement('label');
        taskDescription.classList.add('edit-task-description');
        taskDescription.textContent = 'Edit Description:';

        const taskDescriptionInput = document.createElement('textarea');
        taskDescriptionInput.classList.add('edit-task-description-input');
        taskDescriptionInput.type = 'text';
        taskDescriptionInput.placeHolder = 'A description of your To-Do';

        const taskDueDate = document.createElement('label');
        taskDueDate.classList.add('edit-task-due-date');
        taskDueDate.textContent = 'Change Due Date:';

        const taskDueDateInput = document.createElement('input');
        taskDueDateInput.classList.add('edit-task-due-date-input');
        taskDueDateInput.type = 'date';
    }
}
