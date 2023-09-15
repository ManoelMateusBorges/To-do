import { Controller } from "./controller/controller.js";
import { TodoObject } from "./models/listTodo.js"
import { ViewTodo } from "./views/viewTodo.js"
import { TodoService } from "./services/todoService.js"

const listTodo = new TodoObject();
const viewTodo = new ViewTodo();
const serviceTodo = new TodoService();
const controller = new Controller(listTodo, viewTodo, serviceTodo);
// controller.getAllTodo();
// controller.createTodo();
// controller.deleteTodo();
// controller.closeDetailsTodo();
// controller.editTodo();
