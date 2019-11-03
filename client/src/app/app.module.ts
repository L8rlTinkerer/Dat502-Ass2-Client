import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './core_modules/home/home.module';
import { NavbarModule } from './core_modules/layout/navbar/navbar.module';
import { FooterModule } from './core_modules/layout/footer/footer.module';
import { LoginModule } from './core_modules/login/login.module';
import { RegisterClientModule } from './core_modules/register-client/register-client.module';
import { DashboardModule } from './core_modules/dashboard/dashboard.module';
import { CompanyModule } from './core_modules/company/company.module';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './shared/authentication.service';
import { HttpClientModule } from '@angular/common/http';


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
    DashboardModule,
    CompanyModule,
    HttpClientModule

  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
