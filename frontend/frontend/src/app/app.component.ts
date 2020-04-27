import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <h1>
      Usuário
    </h1>
  </div>
  <ul>
    <li *ngFor="let item of items">
      <h2>{{ item.user_id }}</h2>
      <h4>Nome: {{ item.name }}</h4>
      <h4>Sobrenome: {{ item.last_name }}</h4>
      <h4>Email: {{ item.email }}</h4>
    </li>
  </ul>

  <input #name type='text' placeholder='Name'>
  <input #last_name type='text' placeholder='Last Name'>
  <input #email type='text' placeholder='Email'>
  <input #password type='text' placeholder='Password'>
  <button (click)="add(name.value, last_name.value, email.value, password.value)">Add</button>

  {{ error?.message }}
  `
})
export class AppComponent implements OnInit {
  
  items: User[];
  user:User;
  error: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers().subscribe(
      (items: User[]) => this.items = items,
      (error: any) => this.error = error
    );
  }

  add(name: string, last_name: string, email: string, password: string) {
    this.api.postUser(name, last_name, email, password).subscribe(
      (item: User) => this.items.push(item)
    );
  }

}
