import { Component } from '@angular/core';

// @ means this is a decorator.
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      h3 {
        color: green;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  getServerStatus() {
    return this.serverStatus;
  }
}
