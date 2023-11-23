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

  getBikeListForAdmin(): Observable<Bike[]> {
    return this.http.get<Bike[]>(`${environment.apiBaseUrl}bikes/`);
  }

  getBikeListForStation(idEstacion: String): Observable<Bike[]> {
    return this.http.get<Bike[]>(`${environment.apiBaseUrl}bikes/station/${idEstacion}/bikes`);
  }

  getBikeByUuid(uuid: String): Observable<Bike> {
    return this.http.get<Bike>(`${environment.apiBaseUrl}bikes/${uuid}`);
  }
}
