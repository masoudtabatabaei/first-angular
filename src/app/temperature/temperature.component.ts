import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  fahrenheit:number = 0;
  celsius:number = 0;

  constructor() {}

  ngOnInit(): void {

  }

}
