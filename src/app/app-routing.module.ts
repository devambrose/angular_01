import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthGuard} from "./core/guard/auth.guard";
import {DefaultComponent} from "./views/default/default.component";

const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    children:[
      {
        path:'',
        redirectTo: 'view',
        pathMatch:'full'
      },
      {
        path:'view',
        component:DefaultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
