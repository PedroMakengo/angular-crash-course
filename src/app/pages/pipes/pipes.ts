import {
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, TitleCasePipe, DatePipe, SlicePipe, JsonPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  department = 'Marketing';
  goal = 'learn angular';
  dated = new Date();

  empNames: string[] = ['John', 'Edward', 'Smith'];

  empObj = {
    name: 'John',
    department: 'HR',
  };
}
