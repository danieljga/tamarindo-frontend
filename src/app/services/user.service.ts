import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import data from '@config/config.json';

const endpoint = data.backend_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  login(email:string, password:string): Observable<User> {
    return this.httpClient.post<any>(endpoint + '/v1/auth/login', {
      "email": email,
      "password": password
    }, this.httpHeader)
    .pipe(
      map( data => {
        return {
          name: data.user.name,
          email: data.user.email,
          token: data.access_token
        };
      }),
      catchError(this.processError)
    )
  }

  processError(err:any) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
