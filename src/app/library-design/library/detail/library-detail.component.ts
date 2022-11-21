import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {LibraryControlService} from '../library-control.service';
import {Library} from '../creation-form/library.model';
import {LibraryRequestService} from '../library-request.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TableColumn} from '../home/library-home.component';
import {Rack} from '../../rack/rack-creation-form/rack.model';

@Component({
  selector: 'dur-library-detail',
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LibraryDetailComponent{

  displayedColumns: TableColumn[] = [
    {field: 'label', label: 'Label', visible: true},
  ];

  dataSource: Rack[] = [];
  columnsToDisplay = ['id', 'label', 'size'];
  columnsToDisplayWithExpand = [...this.displayedColumns.map(col => col.field), 'expand'];
  expandedElement: Rack | null;
  showTable = false;

  @Input() library: Library;
  public formGroup: FormGroup;

  constructor(public control: LibraryControlService, public service: LibraryRequestService) {
    console.log(this.library);
  }

  ngOnInit(): void {
    this.dataSource = this.control.openedLibrary.rackList;
    this.formGroup = new FormGroup({
      nameOfLibrary: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    });
  }

  onFocusEvent(event: any) {
    if (this.formGroup.valid && !this.formGroup.pristine) {
      this.service.patchLibrary(event).subscribe();
    }
  }

  onReturn() {
    this.returnToList();
  }

  returnToList() {
    this.control.changeModeToList();
  }

  public onRackCreationOpen(library: Library): void {
    this.control.openedLibrary = library;
    this.control.changeModeToNewRack();
  }
}

