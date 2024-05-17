import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormStyleDirective } from './form-style.directive';
import { ShowIfDirective } from './show-if.directive';
import { ErrorMessagePipe } from "./error-message.pipe";
import { DatePipePipe } from './date-pipe.pipe';

@Component({
    selector: 'app-demographic',
    standalone: true,
    providers: [DatePipe],
    templateUrl: './demographic.component.html',
    styleUrl: './demographic.component.css',
    imports: [FormsModule, ReactiveFormsModule, CommonModule, FormStyleDirective, RouterModule, ShowIfDirective, ErrorMessagePipe,DatePipePipe]
})
export class DemographicComponent {
  group: FormGroup = new FormGroup({
    name: new FormControl(null , [Validators.required,Validators.minLength(1)]),
    surname: new FormControl(null , [Validators.required,Validators.minLength(1)]),
    date: new FormControl(null ,Validators.required),
    age: new FormControl(null ,[Validators.required , Validators.min(0),Validators.max(100)]),
    occupation: new FormControl(null,Validators.required)
  })

  get name() { return this.group.get('name'); }
  get surname() { return this.group.get('surname'); }
  get date() { return this.group.get('date'); }
  get age() { return this.group.get('age'); }
  get occupation() { return this.group.get('occupation'); }

  today: Date = new Date();
}

