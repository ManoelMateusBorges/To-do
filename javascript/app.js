import { Controller } from "./controller/controller.js";
import { TodoObject } from "./models/listTodo.js"
import { ViewTodo } from "./views/viewTodoItem.js"

const listTodo = new TodoObject();
const viewTodo = new ViewTodo();
const controller = new Controller(listTodo, viewTodo);
// controller.getAllTodo();
// controller.createTodo();
// controller.deleteTodo();
// controller.closeDetailsTodo();
// controller.editTodo();
