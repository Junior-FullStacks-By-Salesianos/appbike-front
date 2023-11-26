import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { BikeListComponent } from './components/bike-list/bike-list.component';
import { BikeListByStationComponent } from './components/bike-list-by-station/bike-list-by-station.component';
import { BikeItemByStationComponent } from './components/bike-item-by-station/bike-item-by-station.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { PageFinishRideComponent } from './ui/page-finish-ride/page-finish-ride.component';
import { DetailsUseBarComponent } from './components/details-use-bar/details-use-bar.component';
import { ListStationComponent } from './component/list-station/list-station.component';
import { ListAdminStationsComponent } from './components/list-admin-stations/list-admin-stations.component';
import { ListUserStationsComponent } from './components/list-user-stations/list-user-stations.component';
import { HorizontalNavbarComponent } from './components/horizontal-navbar/horizontal-navbar.component';
import { AdminIssuesPageComponent } from './ui/admin-issues-page/admin-issues-page.component';
import { PageError404Component } from './ui/page-error-404/page-error-404.component';
import { PageError403Component } from './ui/page-error-403/page-error-403.component';
import { PageError400Component } from './ui/page-error-400/page-error-400.component';
import { PageErrorUnespectedComponent } from './ui/page-error-unespected/page-error-unespected.component';
import { PageDetailsTripComponent } from './ui/page-details-trip/page-details-trip.component';
import { BikeCardResumeTripComponent } from './components/bike-card-resume-trip/bike-card-resume-trip.component';
import { SummaryTripComponent } from './components/summary-trip/summary-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserFormComponent,
    LoginFormComponent,
    PageHomeComponent,
    BikeListComponent,
    BikeListByStationComponent,
    BikeItemByStationComponent,
    PageFinishRideComponent,
    DetailsUseBarComponent,
    ListStationComponent,
    ListAdminStationsComponent,
    ListUserStationsComponent,
    HorizontalNavbarComponent,
    AdminIssuesPageComponent,
    PageError404Component,
    PageError403Component,
    PageError400Component,
    PageErrorUnespectedComponent,
    PageDetailsTripComponent,
    BikeCardResumeTripComponent,
    SummaryTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [authInterceptorProviders, provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }