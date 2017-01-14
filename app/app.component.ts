import { Component, ViewChild, OnInit } from '@angular/core';

import { ShelterService } from './service/shelter.service';

import { ShelterFormComponent } from './shelter-form.component';
import { Shelter } from './shelter.model';

@Component({
  selector: 'barinakta-app',
  moduleId: module.id,
  templateUrl: 'ui/app.html'
})
export class AppComponent implements AfterViewInit {

    shelters: Shelter[];

    @ViewChild('shelterForm') shelterForm: ShelterFormComponent;

    constructor(private shelterService: ShelterService) {
    }

    ngOnInit() {
        this.shelters = this.shelterService.getShelters();
    }

    private editShelter(shelter: Shelter) {
        this.shelterForm.editShelter(shelter);
    }

    private onShelterSave(shelter: Shelter) {
        alert("Barınak Kaydedildi: " + shelter.name);
    }
}
