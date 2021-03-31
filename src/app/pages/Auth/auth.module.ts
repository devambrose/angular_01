import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthRoutingModule } from './auth.routing.module';
import { AuthRouteComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthRouteComponent
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule
  ],
  providers: [],
})
export class AuthModule { }
