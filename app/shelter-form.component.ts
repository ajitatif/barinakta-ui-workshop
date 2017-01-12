import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

import { ModalComponent } from 'ng2-bootstrap';

import { Shelter } from './shelter.model';

@Component({
    selector: 'shelter-form',
    templateUrl: 'app/ui/shelter-form.html'
})
export class ShelterFormComponent {

    shelter: Shelter = new Shelter(null, null, null);

    @Output()
    onShelterSave = new EventEmitter<Shelter>();

    @ViewChild('modalDialog') modalDialog: any;

    editShelter(shelter: Shelter) {
        this.shelter = shelter;
        this.modalDialog.show();
    }

    newShelter() {
        this.shelter = new Shelter(null, '', '');
        this.modalDialog.show();
    }

    saveShelter() { 
        this.onShelterSave.emit(this.shelter);
        this.modalDialog.hide();
    }
}