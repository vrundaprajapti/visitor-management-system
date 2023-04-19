import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { VisitorService  } from './visitor.service';
@Injectable({
    providedIn: 'root'
  })
    export class VisitorGuard implements CanActivate {
    constructor(private visitorService: VisitorService, private router: Router) {}
    canActivate(): boolean {
    const currentUserRole = this.visitorService.getCurrentUserRole();
    if (this.visitorService.isLoggedIn() && currentUserRole === 'visitor') {
        return true;
        }
        else {
        this.router.navigate(['/registered']);   
        return false;
        }
    }
    }
    