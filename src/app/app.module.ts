import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ProductManagementComponent } from './components/product-management/product-management.component';
import { ServiceBookingReportManagementComponent } from './components/service-booking-report-management/service-booking-report-management.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { ProfileComponent } from './components/profile/profile.component'


@NgModule({
  declarations: [AppComponent, NavbarComponent, LoginComponent, HomeComponent, DashboardComponent, UserManagementComponent, ProductManagementComponent, ServiceBookingReportManagementComponent, AdminLoginComponent, SignupComponent, FooterComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
