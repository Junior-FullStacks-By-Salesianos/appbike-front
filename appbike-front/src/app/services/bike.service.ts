import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bike } from '../models/bike-list.interface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Bike[]> {
    return this.http.get<Bike[]>(`${environment.apiBaseUrl}bikes/`);
  }
}
