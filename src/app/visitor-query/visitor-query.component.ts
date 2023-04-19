import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VisitorQueryService } from '../visitorquery.service';
import { Query } from '../query.model';

@Component({
  selector: 'app-visitor-query',
  templateUrl: './visitor-query.component.html',
  styleUrls: ['./visitor-query.component.css']
})
export class VisitorQueryComponent implements OnInit {

  queryForm: FormGroup;
  queries: Query[] = [];

  constructor(private formBuilder: FormBuilder, private VisitorQueryService: VisitorQueryService) {
    this.queryForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      query: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.VisitorQueryService.getQueries().subscribe((queries: Query[]) => {
      this.queries = queries;
    });
  }
  onSubmit(): void {
    const query: Query = {
      name: this.queryForm.value.name,
      email: this.queryForm.value.email,
      query: this.queryForm.value.query,
      date: new Date(),
    };
    this.VisitorQueryService.addQuery(query).subscribe(() => {
      alert('Query added successfully!');
      this.queryForm.reset();
      this.queries.push(query);
    });
  }

  deleteQuery(query: Query): void {
    if (query.id) {
      this.VisitorQueryService.deleteQuery(parseInt(query.id)).subscribe(() => {
        this.queries = this.queries.filter(q => q.id !== query.id);
      });
    }
  }

  addReply(query: Query): void {
    const reply = prompt('Enter your reply:');
    if (reply) {
      query.reply = reply;
      this.VisitorQueryService.updateQuery(query).subscribe(() => {
        alert('Reply added successfully!');
      });
    }
  }
  editReply(query: Query): void {
    const reply = prompt('Enter your reply:');
    if (reply) {
      query.reply = reply;
      this.VisitorQueryService.updateQuery(query).subscribe(() => {
        alert('Reply added successfully!');
      });
    }
  }
}

