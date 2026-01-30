import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Todo {
  course: string = 'React';

  http = inject(HttpClient);
  ConcatStrings(str1: string, str2: string) {
    const res = str1 + ' ' + str2;

    return res;
  }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
