import { Component, OnInit } from '@angular/core';
import {LibraryControlService} from '../../library/library-control.service';
import {DurMessageBarInfoService} from '../../../library-message/dur-message-bar-info.service';
import {LibraryRequestService} from '../../library/library-request.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'dur-book-creation',
  templateUrl: './book-creation.component.html',
  styleUrls: ['./book-creation.component.css']
})
export class BookCreationComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(public control: LibraryControlService,
              public durMessageBarInfoService: DurMessageBarInfoService,
              public service: LibraryRequestService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      yearOfRelease: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required]),
    });
  }

  onSubmitRegistration(data) {
    if (this.formGroup.valid) {
      this.service.postBook(data)
        .subscribe(()=>{
          this.durMessageBarInfoService.success('Successfully created book');
          this.changePageToList();
        });
    }
  }

  onCancelNewBook() {
    this.changePageToList();
  }

  changePageToList() {
    this.control.changeModeToList();
    this.formGroup.reset();
  }
}
