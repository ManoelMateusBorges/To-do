export { todo, selectedTodo }
import { editTodoInputValue } from "../controller/controller.js"
import * as utils from "../utils/valid-input.js"

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
    newTodoItem.classList.add('box-todo');
    const classCompletTodo = element.status == "complet" ? 'class="completed-todo"' : '';
    newTodoItem.innerHTML = `<i class="bi bi-check-circle"></i><p data-id="${element.id}" ${classCompletTodo} >${element.task}</p>`;
    newTodoItem.classList.add('todo-item');
    newTodoItem.addEventListener("click", (e) => {
        todoDetails.showAndHide(e.target.querySelector('p'));
        editTodoInputValue.value = e.target.textContent;
    })


    newTodoItem.querySelector('i').addEventListener('click', (e) => {
        e.stopPropagation();
        const element = e.target;
       if(element.classList.contains('bi-check-circle')){
        element.classList.replace( 'bi-check-circle', 'bi-check-circle-fill')
       }else{
        element.classList.replace('bi-check-circle-fill', 'bi-check-circle')
       }
     })
    todoList.appendChild(newTodoItem);
}