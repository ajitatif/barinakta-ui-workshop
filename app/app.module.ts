import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarModule } from './navbar.module';
import { AppComponent }  from './app.component';
import { ShelterListComponent }  from './shelter-list.component';

@NgModule({
  imports:      [ BrowserModule, NavbarModule ],
  declarations: [ AppComponent, ShelterListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
