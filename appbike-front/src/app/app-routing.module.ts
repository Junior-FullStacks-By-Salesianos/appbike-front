
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BikeListComponent } from './components/bike-list/bike-list.component';
import { BikeListByStationComponent } from './components/bike-list-by-station/bike-list-by-station.component';
import { PageFinishRideComponent } from './ui/page-finish-ride/page-finish-ride.component';
import { ListAdminStationsComponent } from './components/list-admin-stations/list-admin-stations.component';
import { ListUserStationsComponent } from './components/list-user-stations/list-user-stations.component';
import { AdminIssuesPageComponent } from './ui/admin-issues-page/admin-issues-page.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterUserFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'rentbystation', component: BikeListByStationComponent }, //cambiar cuando tenga la parte de estaciones
  { path: 'use/trip', component: PageFinishRideComponent },

  {
    path: 'admin',
    children: [
      { path: 'bikes', component: BikeListComponent, canActivate: [AuthGuard] },
      { path: 'issues', component: AdminIssuesPageComponent, canActivate: [AuthGuard] }
    ]
  },

  { path: 'stations/get', component: ListAdminStationsComponent },
  { path: 'user/get', component: ListUserStationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
