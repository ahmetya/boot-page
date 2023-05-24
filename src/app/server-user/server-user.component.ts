import { Component } from '@angular/core';

@Component({
  selector: 'app-server-user',
  templateUrl: './server-user.component.html',
  styleUrls: ['./server-user.component.css'],
})
export class ServerUserComponent {
  userName = '';
  userNameResetStatus = false;

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    this.userNameResetStatus = this.userName ? true : false;
  }

  resetUserName() {
    this.userName = '';
    this.userNameResetStatus = false;
  }
}
