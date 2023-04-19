import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private loggedInAdmin = false; // set to true if user is logged in as admin

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('role') === 'admin') { // check if user is admin
      return true;
    } else {
      this.router.navigate(['/login']); // redirect to login if not admin
      return false;
    }
  }
  isLoggedIn(): boolean {
    // Check if user is logged in
    // Replace with your own implementation of checking if user is logged in
    return true;
  }

  login(): void {
    // Replace with your own implementation of logging in user
    this.loggedInAdmin = true; // Set to true if user is logged in as admin
  }

  logout(): void {
    // Replace with your own implementation of logging out user
    this.loggedInAdmin = false; // Set to false when user logs out
  }
  getCurrentUserRole(): string {
    const currentUser = localStorage.getItem('user');
    if (currentUser !== null) {
      const user = JSON.parse(currentUser);
      return user.role;
    }
    return '';
  }
  
}
  // isAdmin() {
  //   const currentUser = localStorage.getItem('user');
  //   if (currentUser !== null) {
  //     const user = JSON.parse(currentUser);
  //     console.log(user.role);
  //     return user && user.role === 'admin';
  //   }
  //   return false;
  // }

