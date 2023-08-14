const inputTodo = document.querySelector('#input-add-todo');
const todoList = document.querySelector('#todo-list');
const todoBox = document.querySelector('#todo');
const todoDetail = document.querySelector('#container-details');
const editTodo = document.querySelector('#edit-todo');
const closedDetail = document.querySelector('.closed-details');
const deleteTodo = document.querySelector('#deleteTodo');
let selectedTodo;
let openOrClosed = true;


inputTodo.addEventListener("keypress", (e) => {
    if(e.keyCode != "13" || e.target.value.trim() == ""){
       return;
    }
    const addTodoValue = e.target;

    const newTodoItem = document.createElement('div');
    newTodoItem.innerHTML = 
    `<p>${ addTodoValue.value }</p>`;


    newTodoItem.classList.add('todo-item'); 
    todoList.appendChild(newTodoItem);
   

    newTodoItem.addEventListener("click", (e) => {
        e.stopPropagation()
        editTodo.value = e.target.textContent;
        

        if(!openOrClosed){
            if(selectedTodo == e.target.parentElement){
                openOrClosed = true;

            }else {
                openOrClosed = false;
               if((selectedTodo != e.target.parentElement) && todoBox.classList.contains('todo-width')){
                    openOrClosed = true;
               }else{
                    openOrClosed = false;
               }
            }
        }

       if(openOrClosed){
            if (todoDetail.style.width == "25%") {
                todoDetail.style.width = "0%"
            } else {
                todoDetail.style.width = "25%"
            }
            todoBox.classList.toggle('todo-width');

       }

        selectedTodo = e.target.parentElement;
        openOrClosed = false;
        console.log("=====================================")
    })
    
    inputTodo.value = '';
})

function deleteTodoitem(e){
    e.target.parentElement.remove();
    todoBox.style.width = '100%';
}

closedDetail.addEventListener('click', () => {
    if(todoDetail.style.width == "25%"){
        todoDetail.style.width = "0%"
    }else {
        todoDetail.style.width = "25%"
    }
    todoBox.classList.toggle('todo-width');
    editTodo.value = ''
    openOrClosed = true;
})

deleteTodo.addEventListener("click", () => {
   
   for (let i = 0; i < todoList.childNodes.length; i++) {
    let element = todoList.childNodes[i];
    if(element == teste){
        element.remove()
    }
   }

   if(todoDetail.style.width == "25%"){
    todoDetail.style.width = "0%"
    }else {
    todoDetail.style.width = "25%"
    }
    todoBox.classList.toggle('todo-width');

    selectedTodo = "";
   editTodo.value = "";
})

editTodo.addEventListener("keypress", (e) => {
    
    if (e.keyCode == "13") {
        if(e.target.value.trim() == ""){
            editTodo.value = selectedTodo.querySelector('p').textContent;
            editTodo.blur();
            return
        }


        for (let i = 0; i < todoList.childNodes.length; i++) {
            let element = todoList.childNodes[i];
            if (element == selectedTodo) {
               element.querySelector('p').textContent = editTodo.value;
            }
        }
        editTodo.blur();
    }
})