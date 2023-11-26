import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
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
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminTravelsPageComponent } from './ui/admin-travels-page/admin-travels-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RemoveWrapperInterceptor } from './RemoveWrapperInterceptor';

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
    AdminNavbarComponent,
    AdminTravelsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RemoveWrapperInterceptor,
      multi: true,
    },
    authInterceptorProviders, provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }