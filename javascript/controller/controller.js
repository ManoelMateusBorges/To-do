export class Controller {

    #inputTodo = document.querySelector('#input-add-todo');
    #form = document.querySelector('#some-form');
    #deleteTodobtn = document.querySelector('#deleteTodo');
    #todoDetailElement = document.querySelector('#container-details');
    #editTodoInput = document.querySelector('#edit-todo');
    
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
                this.#editTodoInput.value = this.#selectedTodo.children[1].textContent;
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
               const newTodoItem = this.#viewTodo.createTodo(item);
               this.#inputTodo.value = "";
               newTodoItem.addEventListener('click', (e) => {
                this.selectTodo(e);
                this.#editTodoInput.value = this.#selectedTodo.children[1].textContent;
               });
            })
        })
    }

    #DeleteTodo(){
            this.#deleteTodobtn.addEventListener("click",() => {
                const todoId = this.#selectedTodo.attributes['data-id'].value;
                this.#serviceTodo.deleteTodo(todoId).then((e) => {
                this.#selectedTodo.remove();
                this.#editTodoInput.value = "";
                this.#showAndHideDetails(this.#selectedTodo)
            });
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
        this.#editTodoInput.addEventListener("blur",async (e) => {
             const elementText = e.target.value;

             if(elementText != this.#selectedTodo.textContent){
                const elementId = this.#selectedTodo.getAttribute('data-id');
                const elementStatus = !this.#selectedTodo.classList.contains('pendent');
                this.#serviceTodo.updateTodo({title: elementText, completed: elementStatus},elementId).then(() => {
                    this.#selectedTodo.children[1].textContent = elementText;
                })
             }
        })
    }
}