import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notepad } from '../models/notepad';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class NotepadService {
  // Base url
  baseurl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // POST
  CreateNotepads(data): Observable<Notepad> {
    return this.http
      .post<Notepad>(
        this.baseurl + '/notepads/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // GET
  GetNotepad(id): Observable<Notepad> {
    return this.http
      .get<Notepad>(this.baseurl + '/notepads/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // GET
  GetIssues(): Observable<Notepad> {
    return this.http
      .get<Notepad>(this.baseurl + '/notepads/?_limit=5')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // PUT
  UpdateNotepads(id, data): Observable<Notepad> {
    return this.http
      .put<Notepad>(
        this.baseurl + '/notepads/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // DELETE
  DeleteNotepads(id) {
    return this.http
      .delete<Notepad>(this.baseurl + '/notepads/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}