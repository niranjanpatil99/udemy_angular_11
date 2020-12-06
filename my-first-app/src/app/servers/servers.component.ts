import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer : boolean = false;
  serverCreationStatus : string = "No server was created!";
  serverName : string = 'TestServer';
  serverCreated : boolean = false;
  servers = ['TestServer', 'TestServer 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "The server " + this.serverName + " was created successfully!";
  }

  onUpdateServerName(event:any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
