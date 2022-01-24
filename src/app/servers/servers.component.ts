import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowAddNewServer = false;
  serverStatusText = "No server exist!";
  serverName = '';
  serverColor = "#ff0000";

  constructor() {
    setTimeout(() => {
      this.allowAddNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    // this.allowAddNewServer = false;
    this.serverStatusText = "Server was created, Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
