import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotepadService } from 'controllers/notepadController';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { AllNotesComponent } from './components/all-notes-component/all-notes-component.component';
import { HeaderComponent } from './components/header/header.component';
import { IndividualNotepadComponent } from './components/individual-notepad/individual-notepad.component';
import { AddNotesComponent } from './components/add-notes/add-notes.component';
import { EditNotepadComponent } from './components/edit-notepad/edit-notepad.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AllNotesComponent,
    AddNotesComponent,
    IndividualNotepadComponent,
    EditNotepadComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NotepadService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
