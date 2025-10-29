import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
// import { AuthServices } from 'src/app/services/auth-services';
import {IonInput, IonButton } from "@ionic/angular/standalone";
import { AuthServices } from 'src/app/services/auth-services';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [IonButton, IonInput,  ReactiveFormsModule, RouterLink ],
})
export class LoginFormComponent {
//   loginForm!: FormGroup;

//   private fb = inject(FormBuilder);
//   private myServices = inject(AuthServices);
//   private router= inject(Router)
// Validators: any;

//   constructor() {
//     this.loginForm = this.fb.group({
//       email: [
//         '',
//         Validators.compose([
//           Validators.required,
//           Validators.email,
//           Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
//         ]),
//       ],
//       password: [
//         '',
//         Validators.compose([Validators.required, Validators.minLength(6)]),
//       ],
//     });
//   }

//   login() {
//     if (this.myServices.isValidForm(this.loginForm)) {
//       // console.log(this.myServices.sendFormData(this.loginForm.valid));
//       this.myServices.dataStore(this.loginForm.value);
//       this.router.navigate(['/home']);
//     } else {
//       console.log('Form is not valid');
//     }
//   }

loginForm!: FormGroup;
private fb= inject(FormBuilder)
private router= inject(Router)
private readonly myAuth= inject(AuthServices)

constructor() {
    this.loginForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      phonenumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[0-9]).{6,}$' 
          ),
        ],
      ],
    });
  }

onSubmit(){
 if(this.loginForm.valid){
   this.myAuth.getData(this.loginForm.value)
   this.router.navigateByUrl('/home')
 }
}
}
