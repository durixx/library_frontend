import {AfterViewInit, Injectable, OnInit} from '@angular/core';
import {Rack} from './rack.model';
import {LibraryControlService} from '../../library/library-control.service';

@Injectable()
export class RackControlService {

  rack: Rack;

  constructor(public libraryControlService: LibraryControlService) {
    this.init();
  }

  private init() {
    this.rack = new Rack();
    this.libraryControlService.rackShownSubject.subscribe(rack => {
      this.rack.label = rack.label;
    });
  }
}
