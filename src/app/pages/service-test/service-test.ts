import { Component } from '@angular/core';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-service-test',
  imports: [],
  templateUrl: './service-test.html',
  styleUrl: './service-test.css',
})
export class ServiceTest {
  constructor(private todoService: Todo) {
    const res = todoService.ConcatStrings('Angular', 'Tutorials');
  }
}
