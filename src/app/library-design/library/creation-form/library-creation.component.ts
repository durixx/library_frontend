import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LibraryControlService} from '../library-control.service';

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

  constructor(private http: HttpClient, public control: LibraryControlService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      nameOfLibrary: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    });
  }

  submit(data) {
    if (this.formGroup.valid) {
      console.log('valid');
      this.http.post('http://localhost:4200/api/library/', data).subscribe();
    } else {
      console.log('not valid');
    }
    console.warn(data);
  }

  changePageToNewLib() {
    this.control.changeModeToList();
  }
}
