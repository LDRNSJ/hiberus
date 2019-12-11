import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AuthLoginDto } from '../_interfaces/login';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: AuthLoginDto = {
    username: '',
    password: ''
  };
  loading = false;
  error: string;

  constructor(private autentication: AuthService, private router: Router, private toaster: ToastrService) {}

  ngOnInit() {}

  submit() {
    this.loading = !this.loading;
    this.autentication.login(this.loginData).subscribe(
      success => {
        this.toaster.success(`Bienvenido. ${sessionStorage.getItem('username').toLocaleUpperCase()}`);
        this.loading = !this.loading;
        this.router.navigate(['/dashboard']);
      },
      error => {
        if (error.status === 404) {
          this.toaster.error('Verifique su usuario y contraseña.', 'Error');
          this.error = 'Error: Verifique su usuario y contraseña';
        } else {
          this.toaster.error('Internal Error Server.', 'Error');
          this.error = 'Error: Internal Error Server.';
        }
      }
    );
  }
}
