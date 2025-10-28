import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  dataStore(data: AuthData) {
    console.log('Form Data Submitted', data);
    return data;
  }

  isValidForm(form: FormGroup) {
    return form.valid;
  }
}

export interface AuthData {
  email: string;
  password: string;
}
