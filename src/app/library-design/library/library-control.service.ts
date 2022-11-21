import {Injectable} from '@angular/core';
import {Library} from './creation-form/library.model';
import {Rack} from '../rack/rack-creation-form/rack.model';
import {LibraryRequestService} from './library-request.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibraryControlService {

  public viewMode: ViewMode = ViewMode.ALL_LIBRARIES;
  public openedLibrary: Library;
  public listOfOpenedRacks: Rack[];


  public rackShownSubject: Subject<Rack> = new Subject<Rack>();

  constructor(public libraryRequestService: LibraryRequestService) {}

  changeModeToNewLibrary() {
    this.viewMode = ViewMode.NEW_LIBRARY;
  }

  changeModeToList() {
    this.viewMode = ViewMode.ALL_LIBRARIES;
  }

  changeModeToDetail() {
    this.viewMode = ViewMode.DETAIL_LIBRARY;
    this.libraryRequestService.getAllRacks(this.openedLibrary).subscribe(listOfRacks => {
      this.listOfOpenedRacks = listOfRacks;
      }
    );
  }

  changeModeToNewRack() {
    this.viewMode = ViewMode.NEW_RACK;
    this.libraryRequestService.getLabel(this.openedLibrary).subscribe(rack => {
      this.rackShownSubject.next(rack);
    });
  }
}
export enum ViewMode {
  NEW_LIBRARY = 'NEW_LIBRARY',
  ALL_LIBRARIES = 'ALL_LIBRARIES',
  DETAIL_LIBRARY = 'DETAIL_LIBRARY',
  NEW_RACK = 'NEW_RACK'
}








