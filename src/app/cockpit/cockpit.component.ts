import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ServerElementModel } from '../_models/serverElement.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  serverName = '';
  serverContent = '';

  @Output()
  addedItemEvent:EventEmitter<ServerElementModel> = new EventEmitter<ServerElementModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddBlueprint() {
    this.addedItemEvent.emit({
      type: "blueprint" ,
      name: this.serverName ,
      content: this.serverContent
    });

    this.clearInputsValue();
  }

  onAddServer() {
    this.addedItemEvent.emit({
      type: "server" ,
      name: this.serverName ,
      content: this.serverContent
    });

    this.clearInputsValue();
  }

  clearInputsValue() {
    this.serverContent = '';
    this.serverName = '';
  }
}
