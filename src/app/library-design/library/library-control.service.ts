import {Injectable} from '@angular/core';
import {Library} from './creation-form/library.model';

@Injectable({
  providedIn: 'root',
})
export class LibraryControlService {

  public viewMode: ViewMode = ViewMode.ALL_LIBRARIES;
  public openedLibrary: Library;

  constructor() {}

  changeModeToNewLibrary() {
    this.viewMode = ViewMode.NEW_LIBRARY;
  }

  changeModeToList() {
    this.viewMode = ViewMode.ALL_LIBRARIES;
  }

  changeModeToDetail() {
    this.viewMode = ViewMode.DETAIL_LIBRARY;
  }

}
export enum ViewMode {
  NEW_LIBRARY = 'NEW_LIBRARY',
  ALL_LIBRARIES = 'ALL_LIBRARIES',
  DETAIL_LIBRARY = 'DETAIL_LIBRARY',
}








