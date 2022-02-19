import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-angular';
  messageType = 'failure';
  counter = 0;
  checkLimit:boolean = false;
  checkLimitMessage = '';

  showMessage(type:string) {
    if (type === "success") {
      return "Greeting! you win";
    } else {
      return "Sorry! you loss";
    }
  }

  increment() {
    this.counter += 1;
    this.checkReachToPoint();
  }

  decrement() {
    this.counter -= 1;
    this.checkReachToPoint();
  }

  checkReachToPoint() {
    if (this.counter >= 6 || this.counter <= -2) {
      this.checkLimit = true;
      this.checkLimitMessage = "Exceeding the limit";
    } else {
      this.checkLimit = false;
      this.checkLimitMessage = "";
    }
  }
}
