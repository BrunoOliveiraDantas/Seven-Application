import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.interface'

@Injectable()
export class ApiService {

  private apiRoot = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiRoot.concat('user/'))
  }

  postUser(name: string, last_name: string, email: string, password: string) {
    return this.http.post(
      this.apiRoot.concat('user/'),
      { name, last_name, email, password }
    );
  }
  
  putUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiRoot.concat('user/') + user.user_id, JSON.stringify(user), this.httpOptions)
  }
}