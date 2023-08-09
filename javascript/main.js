const inputTodo = document.querySelector('#input-add-todo');
const todoList = document.querySelector('#todo-list');

inputTodo.addEventListener("keypress", (e) => {
    if(e.keyCode != "13"){
       return;
    }
    const addTodo = e.target;

    const newTodoItem = document.createElement('div');
    newTodoItem.textContent = 'teste';
    newTodoItem.classList.add('todo-item'); 
    todoList.appendChild(newTodoItem);
    
})