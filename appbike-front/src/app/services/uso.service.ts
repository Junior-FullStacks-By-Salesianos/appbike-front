import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { UsoBegin } from '../models/uso-begin.interface';

@Injectable({
    providedIn: 'root'
})
export class UsoService {

    constructor(private http: HttpClient) { }

    beginUso(idBicicleta: string): Observable<UsoBegin> {
        return this.http.post<UsoBegin>(`${environment.apiBaseUrl}bikes/rent/${idBicicleta}`, null);
    }
}