import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
  path: 'admin',
  loadChildren: () =>
    import('./features/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: 'admin',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
