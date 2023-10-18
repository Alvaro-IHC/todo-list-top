import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

export default class Project {
  constructor(title) {
    this.id = uuidv4();
    this.title = title;
    this.todos = [];
  }

  addTodo = (todo) => {
    if (!(todo instanceof Todo)) throw new Error("Invalid todo object");
    this.todos.push(todo);
  };

  removeTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
}
