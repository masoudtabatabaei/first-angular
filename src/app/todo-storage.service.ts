import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {

  todos: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  itemsHistory: ReplaySubject<string> = new ReplaySubject(20);

  itemAddEvent: Subject<boolean> = new Subject();

  constructor() { }

  addToList(todoItem: string) {
    const items = this.todos.getValue();
    items.push(todoItem);
    this.todos.next(items);
  }

}
