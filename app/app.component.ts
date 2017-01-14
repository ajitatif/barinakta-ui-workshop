import { Component, ViewChild, OnInit } from '@angular/core';

import './rxjs-operators';

import { ShelterService } from './service/shelter.service';

import { ShelterFormComponent } from './shelter-form.component';
import { Shelter } from './shelter.model';

@Component({
  selector: 'barinakta-app',
  moduleId: module.id,
  templateUrl: 'ui/app.html'
})
export class AppComponent implements OnInit {

    shelters: Shelter[];

    @ViewChild('shelterForm') shelterForm: ShelterFormComponent;

    constructor(private shelterService: ShelterService) {
    }

    ngOnInit() {
        this.populateShelters();
    }

    private populateShelters() {
        this.shelterService.getShelters().subscribe(shelterList => this.shelters = shelterList);
    }

    private editShelter(shelter: Shelter) {
        this.shelterForm.editShelter(shelter);
    }

    private onShelterSave(shelter: Shelter) {
        this.shelterService.updateShelter(shelter).then(updatedShelter => this.onShelterUpdated(updatedShelter), error => alert(error));
    }

    private onShelterUpdated(updatedShelter: Shelter) {
        alert('Barınak Kaydedildi: ' + updatedShelter.name);
        this.populateShelters();
    }
}
