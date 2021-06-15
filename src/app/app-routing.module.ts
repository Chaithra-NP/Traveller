import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterformComponent } from './registerform/registerform.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'customer', component:CustomerComponent},
  {path:'register', component:RegisterComponent},
  {path:'regformCust/:pid', component:RegisterformComponent, data: {user:1}},
  {path:'regformEmp/:pid', component:RegisterformComponent, data: {user:2}},
  {path:'regformArt/:pid', component:RegisterformComponent, data: {user:3}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
