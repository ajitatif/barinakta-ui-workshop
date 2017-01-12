import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarModule } from './navbar.module';

import { AppComponent }  from './app.component';
import { ShelterListComponent }  from './shelter-list.component';
import { PhoneNumberPipe } from './pipe/phone-number.pipe';

@NgModule({
  imports:      [ BrowserModule, NavbarModule ],
  declarations: [ AppComponent, ShelterListComponent, PhoneNumberPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
