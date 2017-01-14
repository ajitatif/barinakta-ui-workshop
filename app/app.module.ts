import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http';

import { ModalModule } from 'ng2-bootstrap';

import { NavbarModule } from './navbar.module';

import { ShelterService } from './service/shelter.service';

import { AppComponent }  from './app.component';
import { ShelterListComponent }  from './shelter-list.component';
import { ShelterFormComponent }  from './shelter-form.component';
import { PhoneNumberPipe } from './pipe/phone-number.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule.forRoot(), HttpModule, JsonpModule, NavbarModule ],
  declarations: [ AppComponent, ShelterListComponent, ShelterFormComponent, PhoneNumberPipe ],
  providers:    [ ShelterService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
