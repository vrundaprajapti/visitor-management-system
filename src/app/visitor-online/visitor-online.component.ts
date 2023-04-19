import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-visitor-online',
  templateUrl: './visitor-online.component.html',
  styleUrls: ['./visitor-online.component.css']
})
export class VisitorOnlineComponent implements OnInit {
  visitors: any[] = [];
  constructor(private visitorService: VisitorService,private router:Router  ) { }
  ngOnInit(): void {
    this.visitorService.getonlienVisitors().subscribe(data => {
      this.visitors = data;
    });
  }
  deleteonlienVisitors(id: number): void {
    if (confirm('Are you sure you want to delete this visitor?')) {
      this.visitorService.deleteonlienVisitors(id).subscribe(() => {
        this.visitors = this.visitors.filter(visitor => visitor.id !== id);
      });
    }
  }
  addonelinevisitor(){
    this.router.navigate(['/registered']);
  }
}