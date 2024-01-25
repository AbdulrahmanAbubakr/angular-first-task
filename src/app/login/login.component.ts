import { Component } from '@angular/core';
import { ILoginUser } from '../datatypes/user';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: ILoginUser;
  constructor(private userApiServices: ApiService, private router: Router) {
    this.user = { email: '', password: '' };
  }
  login() {
    this.userApiServices.Login(this.user).subscribe({
      next: (res) => {
        if (res.success) {
          alert('welcome');
          this.router.navigateByUrl('/home');
        } else {
          alert(res.message);
        }
      },
    });
  }
}
