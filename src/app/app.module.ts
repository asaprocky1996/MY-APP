import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { HomeinnerComponent } from './homeinner/homeinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmiComponent } from './emi/emi.component';
import { SimpleinterestComponent } from './simpleinterest/simpleinterest.component';
import { DegreesComponent } from './degrees/degrees.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { PricesComponent } from './prices/prices.component';
import { VechileComponent } from './vechile/vechile.component';
import { HttpClientModule} from "@angular/common/http";
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { CardComponent } from './card/card.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Error404Component,
    WelcomeComponent,
    HomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    HomeinnerComponent,
    EmiComponent,
    SimpleinterestComponent,
    DegreesComponent,
    DirectivesComponent,
    EmployeeComponent,
    PricesComponent,
    VechileComponent,
    AccountsComponent,
    FlipkartComponent,
    MailComponent,
    PinterestComponent,
    WeatherComponent,
    CreateVehicleComponent,
    CreateAccountsComponent,
    CardComponent,
    CreateUserComponent,
    CreateCardComponent,
    ReportComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
