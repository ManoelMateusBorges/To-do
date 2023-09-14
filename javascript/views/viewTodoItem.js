export class ViewTodo{

    #todoList = document.querySelector('#todo-list');
    
    constructor( ){

    }

    createTodo(todoObject){
        const newTodoItem = document.createElement('div');
        newTodoItem.classList.add('box-todo');
        const classCompletTodo = todoObject.status == "complet" ? 'class="completed-todo"' : '';
        newTodoItem.innerHTML = `<i class="bi bi-check-circle"></i><p  >${todoObject.task}</p>`;
        newTodoItem.classList.add('todo-item');
        this.#todoList.appendChild(newTodoItem);
    }
}