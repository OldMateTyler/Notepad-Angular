import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotepadService } from 'controllers/notepadController';

@Component({
  selector: 'app-all-notes-component',
  templateUrl: './all-notes-component.component.html',
  styleUrls: ['./all-notes-component.component.scss']
})
export class AllNotesComponent implements OnInit{
  Notepads: any = [];

  constructor(public notepadController: NotepadService , private ngZone: NgZone, private router: Router){}
  
  ngOnInit():void{
    this.loadNotepads();
  }

  toggleAddNotepad(){
    this.router.navigate(['/add-notepad']);
  }
  editNotepad(id){
    this.router.navigate(['edit-notepad/' + id]);
  }
  deleteNotepad(id){
    this.notepadController.DeleteNotepads(id).subscribe(res => {
      this.loadNotepads();
      this.router.navigate(['']);
    })
  }
  viewNotepad(id){
    this.router.navigate(['notepad/' + id]);
  }
  loadNotepads(){
    return this.notepadController.GetIssues().subscribe((data: {}) => {
      this.Notepads = data;
    })
  }
}
