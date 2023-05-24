import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector:"[app-servers]", // <div app-servers></div>
  // selector: ".app-servers" // <div class="app-servers"></div>
  // templateUrl: './servers.component.html',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server is created.';
  serverName = 'TestServer  ';
  userName = '';
  userNameStatus = false;
  userNameMessage = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server is created';
  }

  disableServer() {
    this.serverCreationStatus = 'Server is disabled';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {}
}
