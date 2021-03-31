import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthRouteComponent } from './auth.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: AuthRouteComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
]

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthRouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],exports: [RouterModule]
})
export class AuthRoutingModule { }
