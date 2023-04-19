import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Query } from './query.model';

@Injectable({
  providedIn: 'root'
})
export class VisitorQueryService {

  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getQueries(): Observable<Query[]> {
    return this.http.get<Query[]>(`${this.API_URL}/queries`);
  }

  addQuery(query: Query): Observable<Query> {
    return this.http.post<Query>(`${this.API_URL}/queries`, query);
  }

  deleteQuery(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/queries/${id}`);
  }

  updateQuery(query: Query): Observable<Query> {
    return this.http.put<Query>(`${this.API_URL}/queries/${query.id}`, query);
  }

}
