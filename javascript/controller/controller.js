// import * as todoService from "../services/todoService.js";
// import * as utils from "../utils/valid-input.js"
// import { todo, selectedTodo,todoDetailElement, completTodoBtn } from "../models/listTodo.js";


// const closedDetail = document.querySelector('.closed-details');
// const deleteTodobtn = document.querySelector('#deleteTodo');
const inputTodo = document.querySelector('#input-add-todo');
const form = document.querySelector('#some-form');

// export const editTodoInputValue = document.querySelector('#edit-todo');



// export async function getAllTodo(){
//     const allTodo = await todoService.getAllTodoService();
//     todo.loadItens(allTodo);
// };

export class Controller {

    #listTodo;
    #viewTodo;

    constructor(listTodo, viewTodo){
        this.#listTodo = listTodo;
        this.#viewTodo = viewTodo;

        this.createTodo();
    }

    createTodo(){
        form.addEventListener('submit', async e => {
            e.preventDefault();
            
            // const descriptionTodo = inputTodo.value;
            // console.log(descriptionTodo)
            this.#viewTodo.createTodo(this.#listTodo.createTodoObject("teste", "pendente"));
        
            // await todoService.postTodoService(descriptionTodo).then((e)  => {
            //     todo.addItem(e);
            // });
        
            inputTodo.value = "";
        })
    }
}

// export function createTodo(){
//     form.addEventListener('submit', async e => {
//     e.preventDefault();
    
//     const descriptionTodo = inputTodo.value;
//     console.log(descriptionTodo)
//     viewTodo.createTodo(listTodo.createTodoObject("teste", "pendente"));

//     await todoService.postTodoService(descriptionTodo).then((e)  => {
//         todo.addItem(e);
//     });

//     inputTodo.value = "";
// })
// }

// export function deleteTodo(){
//     deleteTodobtn.addEventListener("click", (e) => {
//         const todoId = selectedTodo.getAttribute('data-id');
//         todoService.deleteTodo(todoId)
//         selectedTodo.parentElement.remove();
//         editTodoInputValue.value = ''
//         todoDetailElement.style.width = "0px";
//     })
// }


// export function closeDetailsTodo(){
//     closedDetail.addEventListener('click', (e) => {
//         todoDetailElement.style.width = "0px";
//     })
// }


// export function editTodo() {
//     editTodoInputValue.onblur = (e) => {
    
//         if(selectedTodo.textContent != e.target.value){
//             todoService.updateTodo({task: e.target.value, status: utils.verifyStatusTodo(selectedTodo)}, selectedTodo.attributes['data-id'].value).then((data) => {
//                 selectedTodo.textContent = data.task;
//             })
//         }
//     }
// }