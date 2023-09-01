export { todo, selectedTodo }

const todoList = document.querySelector('#todo-list');
const todoDetailElement = document.querySelector('#container-details');
const editTodo = document.querySelector('#edit-todo');
const todoBox = document.querySelector('#todo');

let selectedTodo = null;

const todo = {
    loadItens : (item) => {
        item.forEach(todo => {
            createElement(todo)
        });
    },
    addItem : (todo) => {
        createElement(todo)
    }
}

const todoDetails = {
    showAndHide: (element) => {
        const item = element;
        console.log(selectedTodo == item)
        console.log(todoDetailElement.offsetWidth)

        if (selectedTodo == item && todoDetailElement.offsetWidth > 0) {
            todoDetailElement.style.width = "0px";
        } else {
            todoDetailElement.style.width = "500px";
            selectedTodo = item;
        }
    }

}


function createElement(todo) {
    const newTodoItem = document.createElement('div');
    newTodoItem.innerHTML = `<p data-id="${todo.id}" >${todo.task}</p>`;
    newTodoItem.classList.add('todo-item');
    newTodoItem.addEventListener("click", (e) => {
        todoDetails.showAndHide(e.target);
    })

    todoList.appendChild(newTodoItem);
}