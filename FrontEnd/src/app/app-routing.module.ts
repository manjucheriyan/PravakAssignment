import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';



const routes: Routes=[
      {path:'',component:LandingComponent},
      {path:'login',component:LoginComponent},     
      {path:'home',component:HomeComponent}, 
      {path:'register',component:RegisterComponent},
      {path:'logout',component:LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
