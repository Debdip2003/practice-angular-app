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
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  constructor(
    private fb: FormBuilder = inject(FormBuilder),
    private myServices: AuthServices
  ) {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  signup() {
    if(this.signupForm.valid){

    } else {
      this.signupForm.
    }
    // console.log(this.myServices.sendFormData(this.signupForm.valid));
    // this.myServices.sendFormData(this.signupForm.valid);
  }
}
