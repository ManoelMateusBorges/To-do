export { todo }

const todoList = document.querySelector('#todo-list');
const todoDetailElement = document.querySelector('#container-details');
const editTodo = document.querySelector('#edit-todo');
const todoBox = document.querySelector('#todo');

let selectedTodo = null;

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

const todoDetails = {
    showAndHide: (element) => {
        const item = element;
        console.log(todoDetailElement.offsetWidth)
        
        
        if (selectedTodo == item && todoDetailElement.offsetWidth == 376) {
            todoDetailElement.style.width = "0px";
        } else {
            todoDetailElement.style.width = "500px";
            selectedTodo = item;
        }
    }

}


function createElement(text) {
    const newTodoItem = document.createElement('div');
    newTodoItem.innerHTML = `<p data-id=>${text}</p>`;
    newTodoItem.classList.add('todo-item');
    newTodoItem.addEventListener("click", (e) => {
        todoDetails.showAndHide(e.target);
    })

    todoList.appendChild(newTodoItem);
}

function verifiOpenOrClosed (element){
    selectedTodo = element
    console.log((todoDetailElement.style.width == "0%"))
    console.log((todoDetailElement.style.width == "25%"))
    console.log((todoDetailElement.style.width))
    if((selectedTodo == selectedTodo) && (todoDetailElement.style.width == "25%")){
        todoDetailElement.style.width = "0%"
    }else if((selectedTodo == selectedTodo) && (todoDetailElement.style.width == "0%")){
        todoDetailElement.style.width = "25%"
    }
}