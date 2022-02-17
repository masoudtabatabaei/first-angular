import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  currentDate: Date = new Date();
  price:number = 15600;

  constructor() { }

  ngOnInit(): void {
  }

}
