import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userObj: UserModel = new UserModel();
  http = inject(HttpClient);
  router = inject(Router);

  onLoginUser() {
    if (this.userObj.email == 'john@gmail.com' && this.userObj.password == 'john123') {
      this.router.navigateByUrl('employee-crud');
    } else {
      alert('Invalid Credentials');
    }
  }
}

class UserModel {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
