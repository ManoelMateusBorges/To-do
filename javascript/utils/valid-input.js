export function confirmEnter(number) {
    if(number == "13"){
        return false;
    }
    return true;
}

export function verifyStatusTodo(todo){
    return todo.classList.contains('completed-todo') ? 'complet' : 'pendent'
}