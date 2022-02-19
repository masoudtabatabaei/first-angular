import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-angular';
  messageType = 'failure';

  showMessage(type:string) {
    if (type === "success") {
      return "Greeting! you win";
    } else {
      return "Sorry! you loss";
    }
  }
}
