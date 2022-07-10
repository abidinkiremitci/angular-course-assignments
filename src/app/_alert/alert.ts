import {AlertType} from "./alert-type";

export class Alert {
  id !: number;
  message !: string;
  type !: AlertType;
  fade ?: boolean;

  constructor(message: string , type : AlertType) {
    this.message = message;
    this.type = type;
  }
}
