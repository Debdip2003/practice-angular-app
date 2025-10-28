import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthServices } from './services/auth-services';

// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthServices, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     if (Boolean(this.authService.sendFormData) === true) {
//       this.router.navigate(['/home']);
//       return true;
//     } else {
//       this.router.navigate(['/signup']);
//       return false;
//     }
//   }
// }

export const authGuard: CanActivateFn = () => {
  const myServices = inject(AuthServices);
  const router = inject(Router);
  return true;

  // if (myServices.dataStore().email === true) {
  //   return true;
  // } else {
  //   router.navigate(['/signup']);
  //   return false;
  // }
};
