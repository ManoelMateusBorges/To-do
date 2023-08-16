import * as todoService from "../services/todoService.js";
import { todo } from "../models/listTodo.js";


const todoBox = document.querySelector('#todo');
const todoDetail = document.querySelector('#container-details');
const editTodo = document.querySelector('#edit-todo');
const closedDetail = document.querySelector('.closed-details');
const deleteTodo = document.querySelector('#deleteTodo');
const completTodo = document.querySelector('.btn-complet');
const inputTodo = document.querySelector('#input-add-todo');
const formTodo = document.querySelector('#formTodo');


export async function getAllTodo(){
    // const allTodo = await todoService.getAllTodoService();
    // todo.loadItens(allTodo);
};

const form = document.getElementById('some-form')
form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Deu certo')
    todoService.postTodoService(form)
})



