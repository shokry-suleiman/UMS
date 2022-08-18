import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/@core/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./user/user.module').then(
        (m) => m.UserModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {path: '**', redirectTo: '/users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
