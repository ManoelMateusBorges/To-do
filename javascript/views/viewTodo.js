export class ViewTodo{

    #todoList = document.querySelector('#todo-list');
    
    constructor( ){}

    createTodo(todoObject){
        const newTodoItem = document.createElement('div');
        newTodoItem.classList.add('box-todo');
        newTodoItem.innerHTML = `<i class="bi bi-check-circle"></i><span>${todoObject.title}</span>`;
        newTodoItem.setAttribute('data-id',todoObject.id)
        newTodoItem.classList.add("todo");
        newTodoItem.classList.add(todoObject.completed == true ? "completed" : "pendent");
        this.#todoList.appendChild(newTodoItem);
        return newTodoItem;
    }
    
}