import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Library} from '../../library/creation-form/library.model';
import {LibraryControlService} from '../../library/library-control.service';
import {LibraryRequestService} from '../../library/library-request.service';
import {RackControlService} from './rack-control.service';
import {DurMessageBarInfoService} from '../../../library-message/dur-message-bar-info.service';

@Component({
  selector: 'dur-rack-creation',
  templateUrl: './rack-creation.component.html',
  styleUrls: ['./rack-creation.component.css']
})
export class RackCreationComponent implements OnInit {

  @Input() library: Library;
  public formGroup: FormGroup;

  constructor(public control: LibraryControlService,
              public service: LibraryRequestService,
              public durMessageBarInfoService: DurMessageBarInfoService,
              public rackControl: RackControlService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      size: new FormControl('', [Validators.required]),
    });
  }

  public getRackLabel(): string {
    return this.rackControl.rack !== undefined ? this.rackControl.rack.label : '';
  }

  public onReturn() {
    this.control.changeModeToList();
  }

  public test() {
    console.log(this.rackControl.rack);
  }

  onSubmitRegistration(data) {
    if (this.formGroup.valid && !this.formGroup.pristine) {
      this.service.postRack(data, this.library.id).subscribe(()=>{
        this.durMessageBarInfoService.success('Successfully created rack');
      });
    }
  }
}
