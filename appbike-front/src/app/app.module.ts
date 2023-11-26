import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { BikeListComponent } from './components/bike-list/bike-list.component';
import { BikeListByStationComponent } from './components/bike-list-by-station/bike-list-by-station.component';
import { BikeItemByStationComponent } from './components/bike-item-by-station/bike-item-by-station.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { PageFinishRideComponent } from './ui/page-finish-ride/page-finish-ride.component';
import { DetailsUseBarComponent } from './components/details-use-bar/details-use-bar.component';
import { ListAdminStationsComponent } from './components/list-admin-stations/list-admin-stations.component';
import { ListUserStationsComponent } from './components/list-user-stations/list-user-stations.component';
import { HorizontalNavbarComponent } from './components/horizontal-navbar/horizontal-navbar.component';
import { AdminIssuesPageComponent } from './ui/admin-issues-page/admin-issues-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormAddBikeAdminComponent } from './components/form-add-bike-admin/form-add-bike-admin.component';



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
    ListAdminStationsComponent,
    ListUserStationsComponent,
    HorizontalNavbarComponent,
    AdminIssuesPageComponent,
    FormAddBikeAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [authInterceptorProviders, provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }