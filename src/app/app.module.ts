import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LibraryCreationComponent} from './library-design/library/creation-form/library-creation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {LibraryHomeComponent} from './library-design/library/home/library-home.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {LibraryControlService} from './library-design/library/library-control.service';
import { LibraryDetailComponent } from './library-design/library/detail/library-detail.component';
import { LibraryMessageComponent } from './library-message/library-message.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RackCreationComponent } from './library-design/rack/rack-creation-form/rack-creation.component';
import {RackControlService} from './library-design/rack/rack-creation-form/rack-control.service';
import {BookCreationComponent} from "./library-design/book/book-creation-form/book-creation.component";

@NgModule({
  declarations: [
    AppComponent,
    LibraryCreationComponent,
    LibraryHomeComponent,
    LibraryDetailComponent,
    LibraryMessageComponent,
    RackCreationComponent,
    BookCreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule
  ],

  providers: [LibraryControlService,RackControlService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
