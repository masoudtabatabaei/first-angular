import { Component } from '@angular/core';
import { ServerElementModel } from './_models/serverElement.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-angular';

  serverElements:ServerElementModel[] = [];

  addNewItem(event:ServerElementModel) {
    this.serverElements.push(event);
  }
}
