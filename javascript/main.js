const inputTodo = document.querySelector('#input-add-todo');
const todoList = document.querySelector('#todo-list');
const todoBox = document.querySelector('#todo');
const todoDetail = document.querySelector('#container-details');

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

    newTodoItem.addEventListener("click", (e) => {
        
        if(todoDetail.style.width == "25%"){
            todoDetail.style.width = "0%"
        }else {
            todoDetail.style.width = "25%"
        }
        todoBox.classList.toggle('todo-width');
        
        
    })

    newTodoItem.classList.add('todo-item'); 
    todoList.appendChild(newTodoItem);


    inputTodo.value = '';
})

function deleteTodoitem(e){
    e.target.parentElement.remove();
    todoBox.style.width = '100%';
}