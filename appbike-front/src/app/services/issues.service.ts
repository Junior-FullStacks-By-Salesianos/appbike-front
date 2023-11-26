import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue, IssuesResponse } from '../models/issues.interface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class IssuesService {
  constructor(private http: HttpClient) { }

  getAll():Observable<IssuesResponse>{
    return this.http.get<IssuesResponse>(`${environment.apiBaseUrl}issues/`);
  }

  setAsDone(issue:Issue){
    return this.http.put(`${environment.apiBaseUrl}issues/${issue.id}`,{
      issue
    }, httpOptions);
  }

  delete(id :number){
    return this.http.delete(`${environment.apiBaseUrl}issues/${id}`);
  }
}