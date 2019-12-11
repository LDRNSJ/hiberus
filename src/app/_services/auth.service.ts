import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { AuthLoginDto } from '../_interfaces/login';
import { HttpClient } from '@angular/common/http';
import { TokenServer } from '../_interfaces/token-server';
/* import decode from 'jwt-decode';
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}
  /**
   * this is used to clear anything that needs to be removed
   */
  clear(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  /**
   * check for expiration and if token is still existing or not
   * @return boolean
   */
  isAuthenticated(): boolean {
    return sessionStorage.getItem('x_token') != null && !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    return false;
  }

  login(loginData: AuthLoginDto): Observable<any> {
    const body: object = {
      username: loginData.username,
      password: loginData.password
    };

    return this.http
      .post(`${environment.baseHiberus}/auth/login`, loginData)
      .pipe(
        map((res: TokenServer) => {
          sessionStorage.setItem('username', res.username);
          sessionStorage.setItem('x_token', btoa(res.tokenType.concat(' ').concat(res.accessToken)));
          return 1;
        })
      )
      .pipe(catchError((error: Response) => throwError(error || 'Server error')));
  }

  /**
   * this is used to clear session storage and also the route to login
   */
  logout(): void {
    this.clear();
    this.router.navigate(['/login']);
  }
}
