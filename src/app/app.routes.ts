import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.page').then((m) => m.HomePage),
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login-form/login-form.component').then(
        (m) => m.LoginFormComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./components/signup-form/signup-form.component').then(
        (m) => m.SignupFormComponent
      ),
  },
  {
    path: 'rxjs',
    loadComponent: () =>
      import('./components/rxjs/rxjs.component').then((m) => m.RxjsComponent),
  },
  {
    path: 'crud',
    loadComponent: () =>
      import('./components/crud-page/crud-page.component').then(
        (m) => m.CrudPageComponent
      ),
  },
  {
    path: 'pipes',
    loadComponent: () =>
      import('./components/pipes/pipes.component').then(
        (m) => m.PipesComponent
      ),
  },
];
