

const URL = "http://localhost:3000/todo";


export async function getAllTodoService(){
    return await fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.error('Houve um erro na requisição', error))
}

export async function postTodoService(todo) {
        return await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ task: `${todo}`, status: "pendent" })
        })
        .then((data) => data.json())
        .catch((error) => console.error("Houve um erro na requisição", error))
}

export async function deleteTodo(id){
    return await fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then((data) => data.json())
        .catch((error) => console.error("Houve um erro na requisição", error))
}

export async function updateTodo(data,id){
    return await fetch(`${URL}/${id}`, {
            method: "UPDATE",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ task: `${data}`, status: "pendent" })
        })
        .then((data) => data.json())
        .catch((error) => console.error("Houve um erro na requisição", error))
}