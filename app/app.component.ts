import { Component, ViewChild } from '@angular/core';

import { ShelterFormComponent } from './shelter-form.component';
import { Shelter } from './shelter.model';

@Component({
  selector: 'barinakta-app',
  moduleId: module.id,
  templateUrl: 'ui/app.html'
})
export class AppComponent  {

    shelters: Shelter[] = [];

    @ViewChild('shelterForm') shelterForm: ShelterFormComponent;

    constructor() {
        this.shelters.push(new Shelter(1, 'Kadıköy', '0 (216) 415 67 11'));
        this.shelters.push(new Shelter(2, 'Üsküdar', '0 (216) 393 00 10'));
    }

    private editShelter(shelter: Shelter) {
        this.shelterForm.editShelter(shelter);
    }

    private onShelterSave(shelter: Shelter) {
        alert("Barınak Kaydedildi: " + shelter.name);
    }
}
