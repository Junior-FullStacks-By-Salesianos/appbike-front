import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BikeUser } from '../models/user.interface';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BikeUserService {

  constructor(private http: HttpClient) { }

  getUserDetails(id: string): Observable<BikeUser>{
    return this.http.get<BikeUser>(`${environment.apiBaseUrl}user/${id}`);
  }
}
