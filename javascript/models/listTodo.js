export class TodoObject {

    #tasks = [];

    constructor(){ }

    createTodoObject(description, status) {
        const task = {title: description, completed: status}
        this.#tasks.push(task);
        return task;
    };


    getTasks(){
        return this.#tasks;
    }

    setTasks(tasks){
        this.#tasks = tasks;
    }
}