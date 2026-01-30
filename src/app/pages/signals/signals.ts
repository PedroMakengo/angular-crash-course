import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  deptName = signal('HR');
  deptId = signal(112);
  emp = signal({ name: 'Pedro Makengo', id: 123 });
  deptList = signal(['HR', 'IT']);
  duration: Signal<string> = signal('');

  constructor() {
    console.log('Before', this.deptName);

    setTimeout(() => {
      this.deptName.set('IT');
      console.log('After', this.deptName);
    }, 2000);
  }
}
