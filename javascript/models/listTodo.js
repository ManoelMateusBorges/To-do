export class TodoObject {

    #tasks = [];

    constructor(){ }

    createTodoObject(text, status) {
        const task = {description: text}
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