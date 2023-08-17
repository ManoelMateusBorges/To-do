export { todo }

const todoList = document.querySelector('#todo-list');
const todoDetailElement = document.querySelector('#container-details');
const editTodo = document.querySelector('#edit-todo');
const todoBox = document.querySelector('#todo');

let selectedTodo;
let openOrClosed = true;

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
        editTodo.value = element.textContent;
        if (!openOrClosed) {
            if (selectedTodo == element.parentElement) {
                openOrClosed = true;

            } else {
                openOrClosed = false;
                if ((selectedTodo != element.parentElement) && todoBox.classList.contains('todo-width')) {
                    openOrClosed = true;
                } else {
                    openOrClosed = false;
                }
            }
        }

        if (openOrClosed) {
            if (todoDetailElement.style.width == "25%") {
                todoDetailElement.style.width = "0%"
            } else {
                todoDetailElement.style.width = "25%"
            }
            todoBox.classList.toggle('todo-width');

        }

        selectedTodo = element.parentElement;
        openOrClosed = false;
        if (selectedTodo.classList.contains('completed-todo')) {
            completTodo.textContent = 'continuar';
        } else {
            completTodo.textContent = 'concluir';
        }
    }

}


function createElement(text) {
    const newTodoItem = document.createElement('div');
    newTodoItem.innerHTML = `<p>${text}</p>`;

    newTodoItem.classList.add('todo-item');

    newTodoItem.addEventListener("click", (e) => {
        
        todoDetails.showAndHide(e.target);
    })

    todoList.appendChild(newTodoItem);
}