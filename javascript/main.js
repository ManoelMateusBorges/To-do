const inputTodo = document.querySelector('#input-add-todo');
const todoList = document.querySelector('#todo-list');

inputTodo.addEventListener("keypress", (e) => {
    if(e.keyCode != "13" || e.target.value.trim() == ""){
       return;
    }
    const addTodoValue = e.target;

    const newTodoItem = document.createElement('div');
    newTodoItem.innerHTML = `
    <p>${ addTodoValue.value }</p>
    <button id="delete-todo">teste</button>`;

    newTodoItem.querySelector("#delete-todo")
    .addEventListener("click", deleteTodoitem)

    newTodoItem.classList.add('todo-item'); 
    todoList.appendChild(newTodoItem);


    inputTodo.value = '';
})

function deleteTodoitem(e){
    e.target.parentElement.remove();
}