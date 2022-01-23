import { Component } from '@angular/core';

@Component({
  selector : 'app-server' ,
  templateUrl : './server.component.html' ,
  styleUrls : []
})
export class ServerComponent {
  serverId: number = Math.floor(Math.random() * 8);
  serverIp: string = "192.168.1.1";
  serverStatus: string = "Offline";

  getServerInfo() {
    return `Server info => id:${this.serverId} and ip: ${this.serverIp} and status: ${this.serverStatus}`;
  }
}