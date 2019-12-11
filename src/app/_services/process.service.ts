import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthLoginDto } from '../_interfaces/login';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Users } from '../_interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  constructor(private http: HttpClient, private router: Router, private autentication: AuthService) {}

  register(loginData: AuthLoginDto): Observable<any> {
    return this.http
      .post(`${environment.baseHiberus}/auth/register`, loginData)
      .pipe(
        map((res: Response) => {
          return res;
        })
      )
      .pipe(catchError((error: Response) => throwError(error || 'Server error')));
  }

  getUser(s: string, q: string, qType: string, sType: string): Observable<Array<Users>> {
    let query = '';
    let sort = '';

    if (q !== '' && qType !== '') {
      query = encodeURIComponent(`${qType}+${q}`);
    }

    if (s !== '' && sType !== '') {
      sort = encodeURIComponent(`${sType}+${s}`);
    }
    return this.http
      .get(`${environment.baseHiberus}/users?q=${query}&sort=${sort}`)
      .pipe(
        map((res: Array<Users>) => {
          return res;
        })
      )
      .pipe(catchError(error => throwError(error || 'Server error')));
  }

  deleteUsers(id: string): Observable<string> {
    return this.http
      .delete(`${environment.baseHiberus}/users/${id}`)
      .pipe(
        map(res => {
          return 'Eliminado con éxito.';
        })
      )
      .pipe(catchError(error => throwError(error || 'Server error')));
  }
}
