import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthGuard} from "./core/guard/auth.guard";

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./pages/Auth/auth.component').then(m=>m.AuthRouteComponent)
  },
  {
    path:'',
    component:AppComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        redirectTo:''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
