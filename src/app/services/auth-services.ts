import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


export interface AuthData {
  email: string;
  password: string;
}

@Injectable({
  providedIn:'root'
})
export class AuthServices {
  // dataStore(data: AuthData) {
  //   console.log('Form Data Submitted', data);
  //   return data;
  // }

  // isValidForm(form: FormGroup) {
  //   return form.valid;
  // }

  user!:any

  getData(userData:any){
    this.user= userData;
  }

  setData(){
    return this.user
  }
}

