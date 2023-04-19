import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent {

  visitorForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private visitorService: VisitorService) {
    this.visitorForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      checkInTime: ['', Validators.required],
      checkOutTime: ['']
    });
  }

  onSubmit(): void {
    const visitor = this.visitorForm.value;
    this.visitorService.addVisitor(visitor).subscribe(() => {
      alert('Visitor added successfully!');
      this.visitorForm.reset();
    });
  }
}
