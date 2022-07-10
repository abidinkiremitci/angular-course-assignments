import { Component } from '@angular/core';

import { AlertService } from "./_alert/alert.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment I - Practicing Components';
  message = '';
  constructor(public alertService : AlertService) { }
}
