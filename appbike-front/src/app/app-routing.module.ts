import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AddStationFormsComponent } from './components/add-station-forms/add-station-forms.component';
import { ListAdminStationsComponent } from './components/list-admin-stations/list-admin-stations.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterUserFormComponent },
  { path: 'login', component: LoginFormComponent },
  {path:'stations/add',component : AddStationFormsComponent},
  {path:'stations/get',component : ListAdminStationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
