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

  deleteStation(naturalId:number){
    return this.http.delete(`http://localhost:8080/stations/delete/${naturalId}`)
  }

  editStation(naturalId:number,stationData: any){
    return this.http.put(`http://localhost:8080/stations/edit/${naturalId}`, stationData);
  }
}
