import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
   {path:'dashboard',component:DashboardComponent,children:[
   {path:'home',component:HomeComponent,children:[
    {path:'homeinner',component:HomeinnerComponent}
   ]},
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
   {path:'vechile',component:VechileComponent}
   ]},
   

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
