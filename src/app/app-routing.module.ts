import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNotesComponent } from './components/all-notes-component/all-notes-component.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { IndividualNotepadComponent } from './components/individual-notepad/individual-notepad.component';
import { AddNotesComponent } from './components/add-notes/add-notes.component';
import { EditNotepadComponent } from './components/edit-notepad/edit-notepad.component';

const routes: Routes = [
  { path: "edit-notepad/:id", component:EditNotepadComponent},
  { path: "notepad/:id", component: IndividualNotepadComponent},
  { path: 'add-notepad', component: AddNotesComponent },
  { path:'', component: AllNotesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
