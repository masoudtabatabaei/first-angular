import { Component } from '@angular/core';

@Component({
  selector : 'app-warning-alert' ,
  templateUrl : './warning-alert.component.html',
  styles : [`
    div {
      padding: 20px;
      background-color: rosybrown;
      border: 1px solid red;
    }
  `]
})
export class WarningAlertComponent {
  msg:string = "TEST MESSAGE";
}