import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Visitor } from './visitor.model';

@Injectable({
  providedIn: 'root'
})
export class RegisteredService {

  private apiUrl = 'http://localhost:3000/registered';

  constructor(private http: HttpClient) { }

  addRegistered(visitor: Visitor): Observable<Visitor> {
    return this.http.post<Visitor>(this.apiUrl, visitor);
  }

  getRegistered(): Observable<Visitor[]> {
    return this.http.get<Visitor[]>(this.apiUrl);
  }

  deleteRegistered(id: string): Observable<Visitor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Visitor>(url);
  }
  getRegisteredUserByEmailAndPassword(email: string, password: string): Observable<Visitor> {
    const url = `${this.apiUrl}?email=${email}&password=${password}`;
    return this.http.get<Visitor[]>(url).pipe(
      map(users => users[0])
    );
  }
}
