import { Component } from '@angular/core';

@Component({
  selector: 'barinakta-app',
  templateUrl: 'app/ui/app.html'
})
export class AppComponent  {

    shelters = [ { 'name': 'Kadıköy', 'phone': '0 (216) 415 67 11' }, { 'name': 'Üsküdar', 'phone': '0 (216) 393 00 10' } ];

}
