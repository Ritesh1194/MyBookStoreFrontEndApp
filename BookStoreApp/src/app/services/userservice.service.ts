import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { User } from "src/app/Models/user";
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private subject = new Subject<any>();
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {

  }

  registration(user: any): Observable<any> {
    console.log(user);
    return this.http.post<any>(`${environment.apiUrl}${environment.registerUrl}`, user, this.httpOptions);
  }

  login(user: any): Observable<any> {
    console.log(user);
    return this.http.post<any>(`${environment.apiUrl}${environment.loginUrl}`, user, this.httpOptions);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${environment.getUsersUrl}`, { headers: new HttpHeaders().set('token', localStorage.token) })
  }

  verifyEmail(token: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${environment.usersVerifyUrl}`, { headers: new HttpHeaders().set('token', localStorage.token) })
  }
  setUsers(message: User[]) {
    console.log("List Of Users", message)
    this.subject.next({ users: message });
  }

  getAllUsers(): Observable<any> {
    return this.subject.asObservable();
  }
}


