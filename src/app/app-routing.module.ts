import { ServiceBookingReportManagementComponent } from './components/service-booking-report-management/service-booking-report-management.component';
import { ProductManagementComponent } from './components/product-management/product-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo:'/login' , pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'user-management',
    component:UserManagementComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'product-management',
    component:ProductManagementComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'service-management',
    component:ServiceBookingReportManagementComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
