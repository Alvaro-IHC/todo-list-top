import { v4 as uuidv4 } from "uuid";
import PriorityEnum from "./PriorityEnum";

export default class Todo {
  constructor(title, description, dueDate, priority) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    if (Object.values(PriorityEnum).every(priorityItem !== priority)) {
      throw new Error("Invalid value for 'priority'");
    }
    this.priority = priority;
  }

  setId = (id) => {
    this.id = id;
  };

  getId = () => this.id;

  setTitle = (title) => {
    this.title = title;
  };

  getTitle = () => this.title;

  setDescription = (description) => {
    this.description = description;
  };

  getDescription = () => this.description;

  setDueDate = (dueDate) => {
    this.dueDate = new Date(dueDate);
  };

  getDueDate = () => this.dueDate;

  setPriority = (priority) => {
    if (Object.values(PriorityEnum).every(priorityItem !== priority)) {
      throw new Error("Invalid value for 'priority'");
    }
    this.priority = priority;
  };

  getPriority = () => this.priority;
}
