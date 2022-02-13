import { Component, OnInit } from '@angular/core';
import { TodoStorageService } from '../todo-storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title: string = '';
  checkAnyItemExists: boolean = false;
  todos: string[] = [];

  addedItemsCount = 0;

  constructor(private todoStorage: TodoStorageService) {
  }

  ngOnInit(): void {
    this.todoStorage.todos.asObservable().subscribe(items => {
      this.todos = items;
    });

    setTimeout(() => {
      this.todoStorage.itemsHistory.asObservable().subscribe(items => {
        console.log('history items');
        console.log(items);
      });
    }, 10000);

    this.todoStorage.itemAddEvent.asObservable().subscribe(() => {
      this.addedItemsCount += 1;
    });
  }

  onSubmit() {
    if (this.title.trim() !== '') {
      this.addToList(this.title);
      this.title = '';
    } else {
      alert('Please fill subject field');
    }
  }

  addToList(todo: string) {
    this.todoStorage.addToList(todo);
    this.todoStorage.itemAddEvent.next(true);
    this.todoStorage.itemsHistory.next(todo);
  }
}
