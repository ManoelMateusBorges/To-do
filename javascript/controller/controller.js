// import * as todoService from "../services/todoService.js";
// import * as utils from "../utils/valid-input.js"
// import { todo, selectedTodo,todoDetailElement, completTodoBtn } from "../models/listTodo.js";


// const closedDetail = document.querySelector('.closed-details');
// const deleteTodobtn = document.querySelector('#deleteTodo');


// export 



// export async function getAllTodo(){
//     const allTodo = await todoService.getAllTodoService();
//     todo.loadItens(allTodo);
// };



export class Controller {

    #inputTodo = document.querySelector('#input-add-todo');
    #form = document.querySelector('#some-form');
    #deleteTodobtn = document.querySelector('#deleteTodo');
    #todoDetailElement = document.querySelector('#container-details');
    #editTodoInputValue = document.querySelector('#edit-todo');
    
    #listTodo;
    #viewTodo;
    #serviceTodo;
    #selectedTodo;

    constructor(listTodo, viewTodo, serviceTodo){

        this.#listTodo = listTodo;
        this.#viewTodo = viewTodo;
        this.#serviceTodo = serviceTodo

        this.#getAllTodo();
        this.#createTodo();
        this.#DeleteTodo();
        this.#editTodo();
    }

    #getAllTodo(){
        this.#serviceTodo.getAllTodoService().then((items) => {
           this.#listTodo.setTasks(items);
           const tasks = this.#listTodo.getTasks();
           tasks.forEach(task => {
              const newTodoItem = this.#viewTodo.createTodo(task);
              newTodoItem.addEventListener('click', (e) => {
                this.selectTodo(e);
                this.#editTodoInputValue.value = this.#selectedTodo.textContent;
              });
           });
        })
    }

    #createTodo(){
        this.#form.addEventListener('submit', async e => {
            e.preventDefault();
            const valueTodo = this.#inputTodo.value;
            const task = this.#serviceTodo.postTodoService({ title: valueTodo, completed: false })
            task.then((item) => {
               const newTodoItem = this.#viewTodo.createTodo(this.#listTodo.createTodoObject(item.title, item.completed));
               newTodoItem.addEventListener('click', () => {
                this.selectTodo(e);
               });
            })
        })

        // verificar como faz para não entrar no fluxo do then quando a requisição da errada.
    }

    #DeleteTodo(){
        this.#deleteTodobtn.addEventListener("click",(e) => {
            const todoId = this.#selectedTodo.attributes['data-id'].value;
            const response = this.#serviceTodo.deleteTodo(todoId);
            response.then((e) => this.#selectedTodo.remove())
        })
    }

    #showAndHideDetails(selectElement){
        const item = selectElement;

        if (this.#selectedTodo == item && this.#todoDetailElement.offsetWidth > 0) {
            this.#todoDetailElement.style.width = "0px";
        } else {
            this.#todoDetailElement.style.width = "500px";
            this.#selectedTodo = item;
        }
    }

    selectTodo(e){
        this.#showAndHideDetails(e.target);
    }

    #editTodo(){
        this.#editTodoInputValue.addEventListener("blur",(e) => {
             const elementText = e.target.value;
             
             console.log()
             if(elementText != this.#selectedTodo.textContent){
                const elementId = this.#selectedTodo.getAttribute('data-id');
                const elementStatus = !this.#selectedTodo.classList.contains('pendent');
                this.#serviceTodo.updateTodo({title: elementText, completed: elementStatus}, Number(elementId));
                
             }
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