import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Notepad } from 'models/notepad';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AllNotesComponent } from '../all-notes-component/all-notes-component.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  baseurl = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
    // DELETE All
    DeleteAllNotepads(){
      this.http.get(this.baseurl + '/notepads/?_limit=5').subscribe(responseData =>{
        Object.entries(responseData).forEach(([key, value]) => {
          this.http.delete(this.baseurl + "/notepads/" + value.id, this.httpOptions).subscribe();
        });
        this.router.navigateByUrl('/add-notepad', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/']);
        })
      });
  }
}
