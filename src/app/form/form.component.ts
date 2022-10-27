import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LibraryModule} from "./library.module";
import {HttpClient} from '@angular/common/http';
class Library {
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  public library: LibraryModule = new LibraryModule();
  public formGroup: FormGroup;

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl("",[Validators.required]),
      address: new FormControl("",[Validators.required]),
      city: new FormControl("",[Validators.required]),
      country: new FormControl("",[Validators.required])
    })
  }

  submit(data) {
    this.http.post('localhost:8080/api/library/create', data).subscribe()
    console.warn(data)
    //console.log(this.formGroup);
  }


}
