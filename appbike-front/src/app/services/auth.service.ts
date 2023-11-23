import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { RegisterUserResponse } from '../models/register-user.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  userRole! :string;

  registerUser(form: any): Observable<any> {
    return this.http.post(`${environment.authUrl}register`,
      {
        "username": form.username,
        "password": form.password,
        "verifyPassword": form.verifyPassword,
        "email": form.email,
        "nombre": form.nombre + ' ' + form.apellidos
      }, httpOptions);
  }

  login(username: string, password: string): Observable<any> {
    //return this.http.post(AUTH_API + 'signin', {
    return this.http.post(`${environment.authUrl}login`, {
      username,
      password
    }, httpOptions);
  }
}
