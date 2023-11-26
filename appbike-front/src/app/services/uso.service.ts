import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { UsoBegin, UsoResponse } from '../models/uso.interface';

@Injectable({
    providedIn: 'root'
})
export class UsoService {

    constructor(private http: HttpClient) { }

    beginUso(idBicicleta: string): Observable<UsoBegin> {
        return this.http.post<UsoBegin>(`${environment.apiBaseUrl}bikes/rent/${idBicicleta}`, null);
    }

    getUsoById(idUso: number): Observable<UsoResponse> {
        return this.http.get<UsoResponse>(`${environment.apiBaseUrl}use/${idUso}`)
    }

    getActiveUse(): Observable<UsoResponse> {
        return this.http.get<UsoResponse>(`${environment.apiBaseUrl}use/active`)
    }
}