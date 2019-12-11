import { Component, OnInit } from '@angular/core';
import { AuthLoginDto } from '../_interfaces/login';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ProcessService } from '../_services/process.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginData: AuthLoginDto = {
    username: '',
    password: ''
  };
  loading = false;
  error: string;
  constructor(
    private process: ProcessService,
    private router: Router,
    private toaster: ToastrService,
    private autentication: AuthService
  ) {}

  ngOnInit() {}

  submit() {
    this.loading = !this.loading;
    this.process.register(this.loginData).subscribe(
      success => {
        this.autentication.login(this.loginData).subscribe(success => {
          this.toaster.success('Usuario Creado con éxito.', `Bienvenido. ${sessionStorage.getItem('username').toLocaleUpperCase()}`);
          this.router.navigate(['/dashboard']);
        });
      },
      error => {
        if (error.status === 409) {
          this.toaster.error('Usuario ya registrado.', 'Error');
          this.error = 'Error: Usuario ya registrado.';
        } else {
          this.error = 'Error: Internal Error Server.';
        }
      }
    );
  }
}
