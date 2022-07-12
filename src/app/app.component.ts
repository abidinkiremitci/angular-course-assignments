import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment II - Binding!';

  static desiredUsername = 'FoolsGarden';
  static desiredPassword = 'LemonTree';

  username = '';
  password = '';

  message = '';
  messageCSS = 'alert alert-success'; // alert alert-warning


  login() {
    if(AppComponent.desiredUsername === this.username && AppComponent.desiredPassword === this.password) {
      this.message = 'Login successfully.';
      this.messageCSS = 'alert alert-success';
    } else {
      this.message = 'Username and password does not match.';
      this.messageCSS = 'alert alert-warning';
    }
  }

  removeMessage() {
    this.message = '';
  }
}
