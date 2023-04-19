import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-visitor-dashbord',
  templateUrl: './visitor-dashbord.component.html',
  styleUrls: ['./visitor-dashbord.component.css']
})
export class VisitorDashbordComponent {
  constructor(private router:Router  ) { }
  logout(){
    // localStorage.removeItem('token');
    localStorage.removeItem('user');
    // localStorage.removeItem('role');
    this.router.navigate(['/visitor-login']);
  }
}