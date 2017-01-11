import { Component } from '@angular/core';

import { Shelter } from './shelter.model';

@Component({
  selector: 'barinakta-app',
  templateUrl: 'app/ui/app.html'
})
export class AppComponent  {

    shelters: Shelter[] = [];

    constructor() {
        this.shelters.push(new Shelter(1, 'Kadıköy', '0 (216) 415 67 11'));
        this.shelters.push(new Shelter(2, 'Üsküdar', '0 (216) 393 00 10'));
    }

    private editShelter(shelter: Shelter) {
        alert('Seçili Barınak: ' + shelter.name);
    }
}
