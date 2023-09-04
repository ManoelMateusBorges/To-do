import * as todoService from "../services/todoService.js";
import { todo, selectedTodo,todoDetailElement } from "../models/listTodo.js";


const closedDetail = document.querySelector('.closed-details');
const deleteTodobtn = document.querySelector('#deleteTodo');
const completTodo = document.querySelector('.btn-complet');
const inputTodo = document.querySelector('#input-add-todo');
const formTodo = document.querySelector('#formTodo');
const form = document.querySelector('#some-form');
export const editTodoInput = document.querySelector('#edit-todo');



export async function getAllTodo(){
    const allTodo = await todoService.getAllTodoService();
    todo.loadItens(allTodo);
};

export function createTodo(){
    form.addEventListener('submit', async e => {
    e.preventDefault()
    
    const descriptionTodo = inputTodo.value;

    await todoService.postTodoService(descriptionTodo).then((e)  => {
        todo.addItem(e);
    });

    inputTodo.value = "";
})
}

export function deleteTodo(){
    deleteTodobtn.addEventListener("click", (e) => {
        const todoId = selectedTodo.getAttribute('data-id');
        todoService.deleteTodo(todoId)
        selectedTodo.parentElement.remove();
    })
}


export function closeDetailsTodo(){
    closedDetail.addEventListener('click', (e) => {
        todoDetailElement.style.width = "0px";
    })
}


export function editTodo() {
    editTodoInput.onblur = (e) => {
        selectedTodo.textContent = e.target.value;
        console.dir(selectedTodo.attributes['data-id'].value)
        // todoService.updateTodo(e.target.value)
    }
}
