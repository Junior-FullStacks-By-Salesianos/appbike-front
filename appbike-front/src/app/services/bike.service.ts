import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bike, BikeListResponse } from '../models/bike-list.interface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  getBikeListForAdmin(page: number): Observable<BikeListResponse> {
    return this.http.get<BikeListResponse>(`${environment.apiBaseUrl}bikes/paged?page=${page}`);
  }

  getBikeListForStation(idEstacion: String): Observable<Bike[]> {
    return this.http.get<Bike[]>(`${environment.apiBaseUrl}bikes/station/${idEstacion}/bikes`);
  }
}
