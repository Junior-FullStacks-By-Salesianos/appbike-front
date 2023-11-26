import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Station } from '../models/list-all-stations';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class StationsService {


  constructor(private http: HttpClient) { }

  createStation(stationData: any) {
    return this.http.post('http://localhost:8080/stations/add', stationData);
  }

  getAllStations():Observable<Station[]>{
    return this.http.get<Station[]>(`http://localhost:8080/stations/get`)
  }
  createAndRefreshStation(stationData: any): Observable<any> {
    return this.http.post('tu_url_de_creacion', stationData)
  }
}
