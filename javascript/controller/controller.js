import * as todoService from "../services/todoService.js";
import { todo, selectedTodo } from "../models/listTodo.js";


const closedDetail = document.querySelector('.closed-details');
const deleteTodobtn = document.querySelector('#deleteTodo');
const completTodo = document.querySelector('.btn-complet');
const inputTodo = document.querySelector('#input-add-todo');
const formTodo = document.querySelector('#formTodo');
const form = document.querySelector('#some-form')



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
    console.log('tetse')
    deleteTodobtn.addEventListener("click", (e) => {
        const todoId = selectedTodo.getAttribute('data-id');
        console.log(todoId)
        todoService.deleteTodo(todoId)
        selectedTodo.parentElement.remove();
    })
}





