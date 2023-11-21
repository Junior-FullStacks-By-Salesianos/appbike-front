import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserResponse } from '../models/register-user.interface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(form: any): Observable<RegisterUserResponse> {
    return this.http.post<RegisterUserResponse>(`${environment.authUrl}register`,
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
