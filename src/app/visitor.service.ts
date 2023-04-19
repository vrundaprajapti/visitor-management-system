import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class VisitorService implements CanActivate {


  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient, private router:Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('role') === 'visitor') { // check if user is admin
      return true;
    } else {
      this.router.navigate(['/visitor-login']); // redirect to login if not admin
      return false;
    }
  }
  getVisitors(): Observable<any> {
    return this.http.get(`${this.API_URL}/visitors`);
  }
  getonlienVisitors(): Observable<any> {
    return this.http.get(`${this.API_URL}/registered`);
  }
  deleteonlienVisitors(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/registered/${id}`);
  }
  addVisitor(visitor: any): Observable<any> {
    return this.http.post(`${this.API_URL}/visitors`, visitor);
    }
    
    updateVisitor(id: number, visitor: any): Observable<any> {
    return this.http.put(`${this.API_URL}/visitors/${id}`, visitor);
    }
    
    deleteVisitor(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/visitors/${id}`);
    } 
    
    getVisitorById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/visitors/${id}`);
    }
    
    getVisitorsByHost(host: string): Observable<any> {
    return this.http.get(`${this.API_URL}/visitors?host=${host}`);
    }
    getCurrentUserRole(): string {
      const currentUser = localStorage.getItem('user');
      if (currentUser !== null) {
        const user = JSON.parse(currentUser);
        return user.role;
      }
      return '';
    }
    isLoggedIn(): boolean {
      // Check if user is logged in
      // Replace with your own implementation of checking if user is logged in
      return true;
    }
    
    }
