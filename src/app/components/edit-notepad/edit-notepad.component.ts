import { DatePipe } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotepadService } from 'controllers/notepadController';

@Component({
  selector: 'app-edit-notepad',
  templateUrl: './edit-notepad.component.html',
  styleUrls: ['./edit-notepad.component.scss']
})
export class EditNotepadComponent {
  submitted = false;
  Notepads: any = [];
  routeSub: any;
  todaysdate :String ;
  timern :String ;
  editNoteForm: FormGroup;
  datePipe: DatePipe;
  constructor(public notepadController: NotepadService, private router: Router, private route: ActivatedRoute,public fb: FormBuilder, private ngZone: NgZone){
    const datepipe=new DatePipe('en-US');
    this.timern = datepipe.transform(new Date(), 'h:mm a');
    this.todaysdate = datepipe.transform(new Date(), 'dd/mm/yy');
  }
  ngOnInit(){
    this.loadNotepads();

  }
  loadNotepads(){
    var noteID = null;
    this.routeSub = this.route.params.subscribe(params => {
      noteID = params['id']
    });
    this.editNoteForm = this.fb.group({
      title: [''], 
      author: [''],
      date: [this.todaysdate],
      time: [this.timern],
      body: [''],
    });
    return this.notepadController.GetNotepad(noteID).subscribe((data: {}) => {
      this.Notepads = data;

      this.editNoteForm = this.fb.group({
        title: [this.Notepads.title], 
        author: [this.Notepads.author],
        date: [this.todaysdate],
        time: [this.timern],
        body: [this.Notepads.body],
    });
    });
  }
  get author() { return this.editNoteForm.get('author'); }
  get title() { return this.editNoteForm.get('title'); }
  get body() { return this.editNoteForm.get('body');}

  submitsForm(id) {
    this.submitted = true;
    if(this.editNoteForm.valid){
          this.notepadController.UpdateNotepads(id, this.editNoteForm.value).subscribe((res) => {
      this.ngZone.run(() => this.router.navigateByUrl('/'));
    });
    }

  }
}
