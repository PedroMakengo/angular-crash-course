import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-crud',
  imports: [FormsModule, JsonPipe],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud implements OnInit {
  empObje: Employee = new Employee();

  // empList: Employee[] = [];
  empList = signal<Employee[]>([]);
  http = inject(HttpClient);
  url: string = 'https://68397a596561b8d882b08dd5.mockapi.io/api/v1/employee';

  ngOnInit(): void {
    this.getAllEmployees();
  }

  onEditEmployee(obj: Employee) {
    const strEmp = JSON.stringify(obj);
    const empObj = JSON.parse(strEmp);
    this.empObje = empObj;
  }

  getAllEmployees() {
    this.http.get(this.url).subscribe({
      next: (result: any) => {
        this.empList.set(result);
      },
    });
  }

  onSaveEmployee() {
    this.http.post(this.url, this.empObje).subscribe({
      next: () => {
        this.getAllEmployees();
      },
    });
  }

  onUpdateEmployee() {
    this.http.put(this.url + '/' + this.empObje.id, this.empObje).subscribe({
      next: () => {
        this.getAllEmployees();
      },
    });
  }

  onDeleteEmployee(id: number) {
    const bConfirm = confirm('Pretendes mesmo remover este documento?');
    if (bConfirm) {
      this.http.delete(this.url + '/' + id).subscribe({
        next: () => {
          this.getAllEmployees();
        },
      });
    }
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
