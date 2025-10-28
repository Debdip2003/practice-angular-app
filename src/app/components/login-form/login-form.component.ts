import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthServices } from 'src/app/services/auth-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [ReactiveFormsModule],
})
export class LoginFormComponent {
  loginForm!: FormGroup;

  private fb = inject(FormBuilder);
  private myServices = inject(AuthServices);
  private router = inject(Router);

  constructor() {
    this.loginForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  login() {
    if (this.myServices.isValidForm(this.loginForm)) {
      // console.log(this.myServices.sendFormData(this.loginForm.valid));
      this.myServices.dataStore(this.loginForm.value);
      this.router.navigate(['/home']);
    } else {
      console.log('Form is not valid');
    }
  }
}
