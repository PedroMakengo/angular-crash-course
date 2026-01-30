import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {
  todoList: any[] = [];

  constructor(private http: HttpClient) {}
  // Quando é que utilizamos o OnInit
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((result: any) => {
      this.todoList = result;
    });
  }
}
