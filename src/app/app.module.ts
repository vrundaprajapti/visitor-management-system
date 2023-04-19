import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { VisitorService } from './visitor.service';
import { HomeComponent } from './home/home.component';
import { RegisteredComponent } from './registered/registered.component';
import { VisitorQueryComponent } from './visitor-query/visitor-query.component';
import { VisitorComponent } from './visitor/visitor.component';
import { VisitorDashbordComponent } from './visitor-dashbord/visitor-dashbord.component';
import { VisitorLoginComponent } from './visitor-login/visitor-login.component';
import { QueryActionComponent } from './query-action/query-action.component';
import { VisitorOnlineComponent } from './visitor-online/visitor-online.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VisitorListComponent,
    HomeComponent,
    RegisteredComponent,
    VisitorQueryComponent,
    VisitorComponent,
    VisitorDashbordComponent,
    VisitorLoginComponent,
    QueryActionComponent,
    VisitorOnlineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [VisitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
