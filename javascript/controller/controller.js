export class Controller {

    #inputTodo = document.querySelector('#input-add-todo');
    #form = document.querySelector('#some-form');
    #deleteTodobtn = document.querySelector('#deleteTodo');
    #todoDetailElement = document.querySelector('#container-details');
    #editTodoInput = document.querySelector('#edit-todo');
    #closedDetailsElement = document.querySelector('#close-details');
    #backgroundConfig = document.querySelector('#box-background');
    #containerTodoList = document.querySelector("#container-todo-list");
    #imgbackgroundfile = document.querySelector("#image");

    #conatinerTodo = document.querySelector('.box-background-suspense');
    

    #listTodo;
    #viewTodo;
    #serviceTodo;
    #selectedTodo;

    constructor(listTodo, viewTodo, serviceTodo){

        this.#listTodo = listTodo;
        this.#viewTodo = viewTodo;
        this.#serviceTodo = serviceTodo;

        this.#getAllTodo();
        this.#createTodo();
        this.#DeleteTodo();
        this.#editTodo();
        this.#closeDetails();
        this.#backgroundTodo();
        this.backgroundImagens();
    }

    #getAllTodo(){
        this.#serviceTodo.getAllTodoService().then((items) => {
           this.#listTodo.setTasks(items);
           const tasks = this.#listTodo.getTasks();
           tasks.forEach(task => {
              const newTodoItem = this.#viewTodo.createTodo(task);
              newTodoItem.addEventListener('click', (e) => {
                this.#selectTodo(e);
                this.#editTodoInput.value = this.#selectedTodo.children[1].textContent;
              });
              newTodoItem.querySelector('.bi').addEventListener("click", (e) => {
                e.stopPropagation();
                this.#completeTodo(newTodoItem);
              })
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
                this.#selectTodo(e);
                this.#editTodoInput.value = this.#selectedTodo.children[1].textContent;
               });
               newTodoItem.querySelector('.bi').addEventListener("click", (e) => {
                e.stopPropagation();
                this.#completeTodo(newTodoItem);
              })
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

    #selectTodo(e){
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

    #closeDetails(){
        this.#closedDetailsElement.addEventListener("click", () => {
            this.#showAndHideDetails(this.#selectedTodo);
        })
    }

    #completeTodo(element){
        element.classList.toggle('completed');
        const todoStatus = element.classList.contains('completed');
        const todoTitle = element.textContent;
        const todoId = element.getAttribute('data-id');
        console.log(todoId);
        this.#serviceTodo.updateTodo({title: todoTitle, completed: todoStatus},todoId)
        
    }

    #backgroundTodo(){
        this.#backgroundConfig.addEventListener("click", (e) => {
            e.stopPropagation()
            const position = e.target.getBoundingClientRect();
            this.#conatinerTodo.style.top = `${position.top + 40}px`
            this.#conatinerTodo.style.left = `${position.right - 300}px`
            this.#conatinerTodo.classList.toggle('hidden-box')
        })

        this.#containerTodoList.addEventListener("click", () => {
            this.#conatinerTodo.classList.add('hidden-box');
        })
        
    }

    backgroundImagens(){
      this.#imgbackgroundfile.addEventListener("change", (e) =>{
        console.log(e)
      })
        
        
    }



}