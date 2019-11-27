import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './core_modules/home/home.module';
import { NavbarModule } from './core_modules/layout/navbar/navbar.module';
import { FooterModule } from './core_modules/layout/footer/footer.module';
import { LoginModule } from './core_modules/login/login.module';
import { RegisterClientModule } from './core_modules/register-client/register-client.module';

import { CompanyModule } from './core_modules/company/company.module';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './shared/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './core_modules/dashboard/dashboard.module';
import { DashBoardService } from './shared/dashboard.service';
import { CookieService } from 'ngx-cookie-service';
import { RegisterOwnerModule } from './core_modules/register-owner/register-owner.module';
import { RegisterAssistantModule } from './core_modules/register-assistant/register-assistant.module';
import { RegisterSupervisorModule } from './core_modules/register-supervisor/register-supervisor.module';
import { AddviewingModule } from './featured/addviewing/addviewing.module';
import { BranchService } from './featured/branch/branch.service';
import { PropertyModule } from './featured/property/property.module';
import { PropertyService } from './featured/property/property.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    NavbarModule,
    FooterModule,
    LoginModule,
    RegisterClientModule,
    RegisterOwnerModule,
    RegisterAssistantModule,
    RegisterSupervisorModule,
    CompanyModule,
    HttpClientModule,
    DashboardModule,
    AddviewingModule,
    PropertyModule
  ],
  providers: [
    AuthenticationService,
    DashBoardService,
    CookieService,
    BranchService,
    PropertyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
