import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { EmiComponent } from './emi/emi.component';
import { SimpleinterestComponent } from './simpleinterest/simpleinterest.component';
import { DegreesComponent } from './degrees/degrees.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { PricesComponent } from './prices/prices.component';
import { VechileComponent } from './vechile/vechile.component';
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
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';
import { AboutCeoComponent } from './about-us/about-ceo/about-ceo.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

const routes: Routes = [
   {path:'login',component:LoginComponent},
   {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
   {path:'home',component:HomeComponent},
   {path: 'welcome', component:WelcomeComponent},
   {path: 'data-binding',component:DataBindingComponent},
   {path:'calculator',component:CalculatorComponent},
   {path:'rectangle',component:RectangleComponent},
   {path:'circle',component:CircleComponent},
   {path:'bmi',component:BmiComponent},
   {path:'emi',component:EmiComponent},
   {path:'simpleinterest',component:SimpleinterestComponent},
   {path:'degrees',component:DegreesComponent},
   {path:'directives',component:DirectivesComponent},
   {path:'employee',component:EmployeeComponent},
   {path:'prices',component:PricesComponent},
   {path:'vechile',component:VechileComponent},
   {path:'accounts',component:AccountsComponent},
   {path: 'flipkart',component:FlipkartComponent},
   {path:'mail',component:MailComponent},
   {path: 'pinterest',component:PinterestComponent},
   {path:'weather',component:WeatherComponent},
   {path:'create-vehicle',component:CreateVehicleComponent},
   {path:'create-accounts',component:CreateAccountsComponent},
   {path:'card',component:CardComponent},
   {path:'create-card',component:CreateCardComponent}, 
   {path:'create-user',component:CreateUserComponent},
   {path:'report',component:ReportComponent},
   {path:'vehicle-details/:id',component:VehicleDetailsComponent},
   {path:'edit-vehicle/:id',component:CreateVehicleComponent},
   {path:'card-details/:id',component:CardDetailsComponent},
   {path:'edit-card/:id',component:CreateCardComponent},
   {path:'account-details/:id',component:AccountDetailsComponent},
   {path:'edit-accounts/:id',component:CreateAccountsComponent},
   {path:'sibling1',component:Sibling1Component},
   {path:'parent',component:ParentComponent},
   {path:'about-ceo',component:AboutCeoComponent},
   {path:'about-company',component:AboutCeoComponent},
   {path:'payments',
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
   },

   {path:'life-cycle-hooks',component:LifeCycleHooksComponent},

  
   ]},
   

]

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
