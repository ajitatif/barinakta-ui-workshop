import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MainComponent } from './admin/main.component';
import { AdminNavigationComponent } from './admin/navigation.component';
import { LandingComponent } from './landing.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MainComponent, AdminNavigationComponent, LandingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
