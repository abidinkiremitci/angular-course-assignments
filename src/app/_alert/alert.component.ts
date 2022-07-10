import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Alert} from "./alert";
import {AlertService} from "./alert.service";
import {AlertType} from "./alert-type";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
  alerts$ ?: Observable<Alert[]>;
  constructor(public alertService : AlertService) { }

  ngOnInit(): void {
    this.alerts$ = this.alertService.alerts$;
  }

  cssClass(alert: Alert) {
    if (!alert) return;

    const classes = ['alert', 'alert-dismissable'];

    const alertTypeClass = {
      [AlertType.SUCCESS]: 'alert alert-success',
      [AlertType.WARNING]: 'alert alert-warning'
    }

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }
}
