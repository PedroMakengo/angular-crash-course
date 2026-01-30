import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-crud',
  imports: [FormsModule, JsonPipe],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {
  empObje: Employee = new Employee();

  http = inject(HttpClient);
  url: string = 'https://68397a596561b8d882b08dd5.mockapi.io/api/v1/employee';

  onSaveEmployee() {
    debugger;
    this.http.post(this.url, this.empObje).subscribe({
      next: (result: any) => {
        debugger;
      },
    });
  }
}

class Employee {
  id: number;
  name: string;
  department: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.department = '';
  }
}
