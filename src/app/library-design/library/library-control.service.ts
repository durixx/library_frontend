import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibraryControlService {

  public viewMode: ViewMode = ViewMode.ALL_LIBRARIES;

  constructor() {}

  changeModeToNewLibrary() {
    this.viewMode = ViewMode.NEW_LIBRARY;
  }

  changeModeToList() {
    this.viewMode = ViewMode.ALL_LIBRARIES;
  }
}
export enum ViewMode {
  NEW_LIBRARY = 'NEW_LIBRARY',
  ALL_LIBRARIES = 'ALL_LIBRARIES'
}








