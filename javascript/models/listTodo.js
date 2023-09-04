export { todo, selectedTodo }
import { editTodoInput } from "../controller/controller.js"

const todoList = document.querySelector('#todo-list');
export const todoDetailElement = document.querySelector('#container-details');
const todoBox = document.querySelector('#todo');
export const completTodoBtn = document.querySelector('.btn-complet');


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


export const todoDetails = {
    showAndHide: (element) => {
        const item = element;

        if (selectedTodo == item && todoDetailElement.offsetWidth > 0) {
            todoDetailElement.style.width = "0px";
        } else {
            todoDetailElement.style.width = "500px";
            selectedTodo = item;
        }
    }

}


function createElement(element) {
    const newTodoItem = document.createElement('div');
    newTodoItem.innerHTML = `<p data-id="${element.id}" >${element.task}</p>`;
    newTodoItem.classList.add('todo-item');
    newTodoItem.addEventListener("click", (e) => {
        todoDetails.showAndHide(e.target);
        editTodoInput.value = e.target.textContent;
        selectedTodo.classList.contains('completed-todo') ? completTodoBtn.textContent = "continuar" :  completTodoBtn.textContent = "concluir";
    })
    todoList.appendChild(newTodoItem);
}