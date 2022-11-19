import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LibraryControlService} from '../library-control.service';
import {DurMessageBarInfoService} from '../../../library-message/dur-message-bar-info.service';
import {LibraryRequestService} from '../library-request.service';

class Library {
}

@Component({
  selector: 'dur-app-form',
  templateUrl: './library-creation.component.html',
  styleUrls: ['./library-creation.component.css']
})


export class LibraryCreationComponent implements OnInit {
  public formGroup: FormGroup;
  public isNewLibraryFormVisible = true;

  constructor(private http: HttpClient,
              public control: LibraryControlService,
              public durMessageBarInfoService: DurMessageBarInfoService,
              public service: LibraryRequestService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      nameOfLibrary: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    });
  }

  onSubmitRegistration(data) {
    if (this.formGroup.valid) {
      this.service.postLibrary(data).subscribe(()=>{
        this.durMessageBarInfoService.success('Successfully created library');
      });
    }
  }

  public onCancelNewLibrary(): void {
    this.changePageToNewLib();
  }

  changePageToNewLib() {
    this.control.changeModeToList();
  }
}
