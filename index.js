import todoController from './todoController.js'

window.addEventListener('load', () => {
    const myTodoController = new todoController('list');

  toDoListElement.appendChild(createItem('Teach class'));
});
