import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
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
    HorizontalNavbarComponent,
    AdminIssuesPageComponent,
    AdminNavbarComponent,
    AdminTravelsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RemoveWrapperInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
