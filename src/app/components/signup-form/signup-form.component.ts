import { Component, inject } from '@angular/core';
import { AuthServices } from 'src/app/services/auth-services';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  imports: [ReactiveFormsModule],
})
export class SignupFormComponent {
  signupForm!: FormGroup;
  private fb = inject(FormBuilder)
  private myServices= inject(AuthServices)

  constructor() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  signup() {
    // if(this.signupForm.valid){
    // this.myServices.dataStore(this.signupForm.value)
    // } 
   
  }
}
