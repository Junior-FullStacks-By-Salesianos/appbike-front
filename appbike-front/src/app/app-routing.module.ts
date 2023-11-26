import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BikeListComponent } from './components/bike-list/bike-list.component';
import { BikeListByStationComponent } from './components/bike-list-by-station/bike-list-by-station.component';
import { PageFinishRideComponent } from './ui/page-finish-ride/page-finish-ride.component';
import { ListAdminStationsComponent } from './components/list-admin-stations/list-admin-stations.component';
import { ListUserStationsComponent } from './components/list-user-stations/list-user-stations.component';
import { PageError404Component } from './ui/page-error-404/page-error-404.component';
import { PageError403Component } from './ui/page-error-403/page-error-403.component';
import { PageError400Component } from './ui/page-error-400/page-error-400.component';
import { PageErrorUnespectedComponent } from './ui/page-error-unespected/page-error-unespected.component';
import { AdminIssuesPageComponent } from './ui/admin-issues-page/admin-issues-page.component';
import { AuthGuard } from './auth.guard';
import { AdminTravelsPageComponent } from './ui/admin-travels-page/admin-travels-page.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterUserFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'admin/issues', component: AdminIssuesPageComponent, canActivate: [AuthGuard] },
  { path: 'admin/travels', component: AdminTravelsPageComponent, canActivate: [AuthGuard] },
  { path: 'rentbystation', component: BikeListByStationComponent }, //cambiar cuando tenga la parte de estaciones
  { path: 'use/trip', component: PageFinishRideComponent },
  { path: 'error-404', component: PageError404Component },
  { path: 'access-denied', component: PageError403Component },
  { path: 'error-400', component: PageError400Component },
  { path: 'error', component: PageErrorUnespectedComponent },

  {
    path: 'admin',
    children: [
      { path: 'bikes', component: BikeListComponent, canActivate: [AuthGuard] },
      { path: 'admin/issues', component: AdminIssuesPageComponent, canActivate: [AuthGuard] }
    ]
  },

  { path: 'stations/get', component: ListAdminStationsComponent },
  { path: 'user/get', component: ListUserStationsComponent },
  { path: '**', redirectTo: '/error-404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
