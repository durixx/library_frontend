import {Component, Input, OnInit} from '@angular/core';
import {DurMessageBarInfo} from './dur-message-bar-info.model';
import {DurMessageBarInfoService} from './dur-message-bar-info.service';

@Component({
  selector: 'dur-app-message',
  templateUrl: './library-message.component.html',
  styleUrls: ['./library-message.component.css']
})
export class LibraryMessageComponent implements OnInit {
  public messageBarInfo: DurMessageBarInfo;
  public message: string;


  constructor(public durMessageBarInfoService: DurMessageBarInfoService) {
  }

  ngOnInit(): void {
    this.durMessageBarInfoService.messageShownSubject.subscribe(() => {
      this.messageBarInfo = this.durMessageBarInfoService.messageBarInfo;
      this.message = this.durMessageBarInfoService.message;
    });
  }


}
