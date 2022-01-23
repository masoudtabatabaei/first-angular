import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowAddNewServer = false;
  serverStatusText = "No server exist!";

  constructor() {
    setTimeout(() => {
      this.allowAddNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.allowAddNewServer = false;
    this.serverStatusText = "Server was created";
  }
}
