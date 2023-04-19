import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisteredService } from '../registered.service';
import { Visitor } from '../visitor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {
  role:string='visitor';
  visitorForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private registeredService: RegisteredService, private router: Router) {
    this.visitorForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const visitor: Visitor = {
      name: this.visitorForm.value.name,
      role: 'visitor',
      email: this.visitorForm.value.email,
      phone: this.visitorForm.value.phone,
      company: this.visitorForm.value.company,
      password: this.visitorForm.value.password,
      confirmPassword: this.visitorForm.value.confirmPassword,
      checkInTime: new Date(),
      checkOutTime: new Date()
    };
    this.registeredService.addRegistered(visitor).subscribe(() => {
      localStorage.setItem('user', JSON.stringify({email: visitor.email, password: visitor.password, role: visitor.role}));
      alert('Registered successfully!');
      this.visitorForm.reset();
    });
  }
  visitorLogin() {
    this.router.navigate(['/visitor-login']);
  }

}
