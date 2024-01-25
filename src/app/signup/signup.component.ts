import { Component } from '@angular/core';
import { IRegisterUser } from '../datatypes/user';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  user: IRegisterUser;
  constructor(private _authApiService: ApiService, private router: Router) {
    this.user = {
      name: '',
      password: '',
      phoneNumber: '',
      email: '',
    };
  }
  signUp() {
    this._authApiService.Register(this.user).subscribe({
      next: (res) => {
        if (res.success) {
          alert('done');
          this.router.navigateByUrl('/login');
        } else {
          alert(res.message);
        }
      },
    });
  }
}
