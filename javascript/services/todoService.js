

const URL = "http://localhost:3000/todo";


export async function getAllTodoService(){
    return await fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.error('Houve um erro na requisição', error))
}

export async function postTodoService(todo) {
        return await fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ task: `${todo}`, status: "pendent" })
        })
        .then((data) => data.json())
        .catch((error) => console.error("Houve um erro na requisição", error))
    
}