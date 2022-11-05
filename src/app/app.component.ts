import {Component} from '@angular/core';
import {LibraryControlService} from './library-design/library/library-control.service';


@Component({
  selector: 'dur-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'frontend';

  constructor(public libraryControlService: LibraryControlService) {
  }
}
