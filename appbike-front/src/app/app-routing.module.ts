import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AdminIssuesPageComponent } from './ui/admin-issues-page/admin-issues-page.component';
import { AuthGuard } from './auth.guard';
import { AdminTravelsPageComponent } from './ui/admin-travels-page/admin-travels-page.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterUserFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'admin/issues', component: AdminIssuesPageComponent, canActivate: [AuthGuard]},
  { path: 'admin/travels', component: AdminTravelsPageComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
