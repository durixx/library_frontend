import {Injectable} from '@angular/core';
import {DurMessageBarInfo} from './dur-message-bar-info.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DurMessageBarInfoService {


  public messageShownSubject: Subject<void> = new Subject<void>();
  public messageBarInfo: DurMessageBarInfo;
  public message: string;
  public displayMessage: boolean;

  private timeLeft = 5;
  private interval;

  public success(message: string) {
    this.message = message;
    this.messageBarInfo = DurMessageBarInfo.SUCCESS;
    this.messageShownSubject.next();
    this.displayMessage = true;
    this.startTimer();
  }

  public warning(message: string) {
    this.message = message;
    this.messageBarInfo = DurMessageBarInfo.WARNING;
    this.messageShownSubject.next();
  }

  public error(message: string) {
    this.message = message;
    this.messageBarInfo = DurMessageBarInfo.ERROR;
    this.messageShownSubject.next();
  }

  public info(message: string) {
    this.message = message;
    this.messageBarInfo = DurMessageBarInfo.INFO;
    this.messageShownSubject.next();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        console.log(this.timeLeft);
        this.timeLeft--;
      } else {
        this.displayMessage = false;
        this.stopTimer();
      }
    },1000);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.timeLeft = 5;
  }
}
