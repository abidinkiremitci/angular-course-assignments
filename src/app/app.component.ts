import { Component } from '@angular/core';

class Log {
  static idSequence = 0;
  id = ++Log.idSequence;
  timeStamp = Date.now();
  message = "Button clicked";
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment III - Directives!';
  isParagraphHidden = false;
  logs : Log[] = [];


  clicked() {
    this.isParagraphHidden = !this.isParagraphHidden;
    this.logs.push(new Log());
  }

  printLog(log: Log) {
    return log.timeStamp + ' - ' + log.message;
  }
}
