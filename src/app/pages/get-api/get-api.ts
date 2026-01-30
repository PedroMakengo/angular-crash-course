import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {
  todoList: any[] = [];
  todoService = inject(Todo);

  constructor(private http: HttpClient) {
    const res = this.todoService.ConcatStrings('Angular', 'Tutorials');
  }
  // Quando é que utilizamos o OnInit
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe({
      next: (result: any) => {
        this.todoList = result;
      },
    });
  }
}
