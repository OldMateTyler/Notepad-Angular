import { DatePipe } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NotepadService } from 'controllers/notepadController';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss'],
  providers: [DatePipe]
})
export class AddNotesComponent {
  addNoteForm: FormGroup;
  submitted = false;
  NotepadArray: any = [];

  ngOnInit(): void {
    this.addNotepad();
  }

  todaysdate :String ;
  timern :String ;

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public notePadService : NotepadService,
    private datePipe: DatePipe
  ){
    this.timern = this.datePipe.transform(new Date(), 'h:mm a');
    this.todaysdate = this.datePipe.transform(new Date(), 'dd/mm/yy');
  }
  addNotepad(){
    
    this.addNoteForm = this.fb.group({
      title: ['', Validators.required], 
      author: ['', Validators.required],
      date: [this.todaysdate],
      time: [this.timern],
      body: ['', Validators.required],
    });
  }
  get author() { return this.addNoteForm.get('author'); }
  get title() { return this.addNoteForm.get('title'); }
  get body() { return this.addNoteForm.get('body');}
  submitForm() {
    this.submitted = true;
    if(this.addNoteForm.valid){
      this.notePadService.CreateNotepads(this.addNoteForm.value).subscribe((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('/'));
      });
    }
  }
}
