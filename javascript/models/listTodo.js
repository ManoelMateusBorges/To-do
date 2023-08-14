export { todo }

const todoList = document.querySelector('#todo-list');

const todo = {
    loadItens : (item) => {
        item.forEach(element => {
            createElement(element.task)
        });
    },
    addItem : (text) => {
        createElement(text)
    }
}


function createElement(text) {
    const newTodoItem = document.createElement('div');
    newTodoItem.innerHTML = `<p>${text}</p>`;

    newTodoItem.classList.add('todo-item');
    todoList.appendChild(newTodoItem);
}