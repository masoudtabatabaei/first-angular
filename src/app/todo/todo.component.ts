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
  todos : string[] = this.todoStorage.showList();
  totalCount: number = 0;

  constructor(private todoStorage: TodoStorageService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.title.trim() !== '') {
      this.addToList(this.title);
      this.title = '';
      this.checkAnyItemExists = this.todoStorage.checkAnyItemExists();
      this.totalCount += 1;
    } else {
      alert("Please fill subject field");
    }
  }

  addToList(todo:string){
    this.todoStorage.addToList(todo);
  }
}
