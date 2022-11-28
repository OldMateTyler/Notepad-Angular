import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotepadService } from 'controllers/notepadController';
import { Notepad } from 'models/notepad';

@Component({
  selector: 'app-individual-notepad',
  templateUrl: './individual-notepad.component.html',
  styleUrls: ['./individual-notepad.component.scss']
})

export class IndividualNotepadComponent implements OnInit {
  Notepads: any = [];
  routeSub: any;
  
  constructor(public notepadController: NotepadService, private router: Router, private route: ActivatedRoute){}
  ngOnInit():void{
    this.loadNotepads();
  }
  deleteNotepad(id){
    this.notepadController.DeleteNotepads(id).subscribe(res => {
      this.loadNotepads();
      this.router.navigate(['']);
    })
  }
  toggleAddNotepad(){
    this.router.navigate(['/add-notepad']);
  }
  editNotepad(id){
    this.router.navigate(['edit-notepad/' + id]);
  }
  loadNotepads(){
    var noteID = null;
    this.routeSub = this.route.params.subscribe(params => {
      noteID = params['id']
    });
    return this.notepadController.GetNotepad(noteID).subscribe((data: {}) => {
      this.Notepads = data;
    });
  }
}
