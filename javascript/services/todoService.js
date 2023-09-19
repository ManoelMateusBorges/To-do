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
                throw new Error("Houve um erro ao salvar")
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
                    throw new Error("houve um erro ao deletar")
                }
                return response.json();
    
            } catch (error) {
                console.log(error)
            }
    }

    async updateTodo(todo,id){
        try {
            const response = await fetch(`${this.#URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(todo)
            })
            if (!response.ok) {
                throw new Error("houve um erro ")
                
            }
            return response;

        } catch (error) {
            console.log("Houve um Erro ao tentar editar a tarefa.")
        }
        
    }

}