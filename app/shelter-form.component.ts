import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap';

import { Shelter } from './shelter.model';

@Component({
    selector: 'shelter-form',
    moduleId: module.id,
    templateUrl: 'ui/shelter-form.html'
})
export class ShelterFormComponent {

    shelter: Shelter = new Shelter(null, null, null);

    @Output()
    onShelterSave = new EventEmitter<Shelter>();

    @ViewChild('modalDialog') modalDialog: any;

    @ViewChild('shelterForm') shelterForm: any;

    editShelter(shelter: Shelter) {
        this.shelter = JSON.parse(JSON.stringify(shelter));
        this.modalDialog.show();
    }

    newShelter() {
        this.shelter = new Shelter(null, '', '');
        this.modalDialog.show();
    }

    saveShelter() { 
        this.onShelterSave.emit(this.shelter);
        this.closeDialog();
    }

    closeDialog() {
        this.modalDialog.hide();
    }
}