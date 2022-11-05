import {Component, Input} from '@angular/core';
import {LibraryControlService} from '../library-control.service';
import {Library} from '../creation-form/library.model';
import {LibraryRequestService} from '../library-request.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'dur-library-detail',
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.css']
})
export class LibraryDetailComponent{

  @Input() library: Library;
  public formGroup: FormGroup;

  constructor(public control: LibraryControlService, public service: LibraryRequestService) {
    console.log(this.library);
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      nameOfLibrary: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    });
  }

  onFocusEvent(event: any){
    if(this.formGroup.valid && !this.formGroup.pristine) {
      this.service.patchLibrary(event).subscribe();
    }
  }
}
