import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ShelterListComponent }  from './shelter-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ShelterListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
