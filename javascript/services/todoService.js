
export class TodoService {

    #URL = "http://localhost:3000/todo"

    async getAllTodoService() {
        return await fetch(this.#URL)
            .then((response) => response.json())
            .catch((error) => console.error('Houve um erro na requisição', error))
    }

    async postTodoService(todo) {
        try {
            const response = await fetch(this.#URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(todo)
            })
            if (!response.ok) {
                throw new Error("houve um erro ")
            }
            return response.json();

        } catch (error) {
            console.log(error)
        }
    }

    async deleteTodo(id){
            try {
                const response = await fetch(`${this.#URL}/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }
                })
                if (!response.ok) {
                    throw new Error("houve um erro ")
                }
                return response.json();
    
            } catch (error) {
                console.log(error)
            }
    }

}


// const URL = "http://localhost:3000/todo";


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

export async function updateTodo(todo,id){
    return await fetch(`${URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(todo)
        })
        .then((data) => data.json())
        .catch((error) => console.error("Houve um erro na requisição", error))
}