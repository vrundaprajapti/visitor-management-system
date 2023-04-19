import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { VisitorComponent } from './visitor/visitor.component';
import { RegisteredComponent } from './registered/registered.component';
import { VisitorQueryComponent } from './visitor-query/visitor-query.component';
import { VisitorLoginComponent } from './visitor-login/visitor-login.component';
import { VisitorDashbordComponent } from './visitor-dashbord/visitor-dashbord.component';
import { AdminGuard } from './admin.guard';
import { VisitorGuard } from './visitor.guard';
import { VisitorOnlineComponent } from './visitor-online/visitor-online.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'home', component: HomeComponent,canActivate: [AdminGuard] },
  { path: 'visitor-list', component: VisitorListComponent ,canActivate: [AdminGuard] },
  { path: 'visitor', component: VisitorComponent,canActivate: [AdminGuard] },
  { path: 'registered', component: RegisteredComponent },
  { path: 'visitor-query', component: VisitorQueryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'visitor-login', component: VisitorLoginComponent },
  {path: 'visitor-dashboard', component: VisitorDashbordComponent, canActivate: [VisitorGuard] },
  {path: 'visitor-online', component: VisitorOnlineComponent,canActivate: [AdminGuard] },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
