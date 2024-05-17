import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private router: Router) {}
  
  group: FormGroup = new FormGroup({
    email: new FormControl(null,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\[a-z]{2,4}$')),
    password: new FormControl(null,Validators.compose([Validators.minLength(8), Validators.maxLength(30)]))
  })

  nextPage(): void {
    if (this.group.valid) {
      this.router.navigate(['/demographic']);
    }
  }
}
