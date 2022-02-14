import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent implements OnInit {
  disabled = false;
  name = "Masoud";
  constructor() { }

  ngOnInit(): void {
  }

  setName(event:Event){
    this.name = (<HTMLInputElement>event.target).value;
  }

  clearName(){
    this.name = '';
  }
}
