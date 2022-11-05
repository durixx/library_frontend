import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Library} from '../creation-form/library.model';
import {LibraryControlService} from '../library-control.service';
import {LibraryRequestService} from '../library-request.service';




@Component({
  selector: 'dur-app-home',
  templateUrl: './library-home.component.html',
  styleUrls: ['./library-home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class LibraryHomeComponent {

  displayedColumns: TableColumn[] = [
    {field: 'id', label: 'Id', visible: false},
    {field: 'nameOfLibrary', label: 'Name', visible: true},
];

  dataSource: Library[] = [];
  columnsToDisplayWithExpand = [...this.displayedColumns.map(col => col.field), 'expand'];
  expandedElement: Library | null;


  constructor(public control: LibraryControlService, public service: LibraryRequestService) {
  }

  ngOnInit(): void {
    this.service.getAllLibraries()
      .subscribe(dataSource => {
        this.dataSource = dataSource;
      });
  }

  public getVisibleColumns(): TableColumn[] {
    return this.displayedColumns.filter(col => col.visible);
  }

  changePageToNewLib() {
    this.control.changeModeToNewLibrary();
  }

  public onLibraryDetailOpen(library: Library): void {
    this.control.openedLibrary = library;
    this.control.changeModeToDetail();
  }
}

export class TableColumn {
  field: string;
  label: string;
  visible: boolean;
}







