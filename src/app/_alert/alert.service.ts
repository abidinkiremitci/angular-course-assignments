import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Alert} from "./alert";
import {AlertType} from "./alert-type";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private id_seq : number = 1;

  private _alerts = new BehaviorSubject<Alert[]>([]);
  readonly alerts$ = this._alerts.asObservable();

  private alerts: Alert[] = [];

  constructor() { }

  create(item: Alert) {
    item.id = ++this.id_seq;
    this.alerts.push(item);
    this._alerts.next(Object.assign([], this.alerts));
  }

  remove(id: number) {
    this.alerts.forEach((t, i) => {
      if (t.id === id) {
        this.alerts.splice(i, 1);
      }
      this._alerts.next(Object.assign([], this.alerts));
    });
  }

  success(message: string) {
    console.log(typeof message);
    console.log(message);
    let alert = new Alert(message, AlertType.SUCCESS);
    this.create(alert);
  }

  warn(message: string) {
    console.log(typeof message);
    console.log(message);
    let alert = new Alert(message, AlertType.WARNING);
    this.create(alert);
  }

  clear() {
    this._alerts.next(Object.assign([], this.alerts));
  }
}
