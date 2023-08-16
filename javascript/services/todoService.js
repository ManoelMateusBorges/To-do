

const URL = "http://localhost:3000/todo";


export async function getAllTodoService(){
    return await fetch(URL)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => console.error('Houve um erro na requisição'))
}

export async function postTodoService(todo) {

    fetch("http://localhost:3000/todo",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({task: "teste", status: "blblbl"})
        })
}