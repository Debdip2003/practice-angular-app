import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';
import { DetailsPage } from './pages/details/details.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.page').then((m) => m.HomePage),
    children: [{ path: 'details/:securityID', component: DetailsPage }],
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: 'home',
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
  {
    path: 'directive',
    loadComponent: () =>
      import('./components/directive/directive.component').then(
        (m) => m.DirectiveComponent
      ),
  },
  {
    path: 'view-child',
    loadComponent: () =>
      import('./pages/view-child/view-child.page').then((m) => m.ViewChildPage),
  },
  {
    path: 'ionic-lifecycle',
    loadComponent: () =>
      import('./pages/ionic-lifecycle/ionic-lifecycle.page').then(
        (m) => m.IonicLifeCyclePage
      ),
  },
];
