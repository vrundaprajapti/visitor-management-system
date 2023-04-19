import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {
  visitors: any[] = [];
  constructor(private visitorService: VisitorService,private router:Router  ) { }
  ngOnInit(): void {
    this.visitorService.getVisitors().subscribe(data => {
      this.visitors = data;
    });
  }
  deleteVisitor(id: number): void {
    if (confirm('Are you sure you want to delete this visitor?')) {
      this.visitorService.deleteVisitor(id).subscribe(() => {
        this.visitors = this.visitors.filter(visitor => visitor.id !== id);
      });
    }
  }
  addvisitor() {
    this.router.navigate(['/visitor']);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }


}