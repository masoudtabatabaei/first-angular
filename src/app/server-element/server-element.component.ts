import { Component, OnInit , Input} from '@angular/core';
import {ServerElementModel} from "../_models/serverElement.model";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit {
  @Input()
  serverElement:ServerElementModel = new ServerElementModel("","","");

  constructor() { }

  ngOnInit(): void {
  }

}
