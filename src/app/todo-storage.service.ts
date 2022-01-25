import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {
  todos: string[] = [];
  constructor() { }

  addToList(todoItem: string) {
    this.todos.push(todoItem);
  }

  showList() {
    return this.todos;
  }

  checkAnyItemExists() {
    return this.todos.length > 0 ? true : false;
  }
}
