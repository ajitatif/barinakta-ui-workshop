import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Shelter } from './shelter.model';

@Component({
    selector: 'shelter-list',
    templateUrl: 'app/ui/shelter-list.html'
})
export class ShelterListComponent {

    @Input()
    shelters: Shelter[];

    @Output()
    onShelterSelected = new EventEmitter<Shelter>();

    private selectShelter(shelter: Shelter) {
        this.onShelterSelected.emit(shelter);
    }
}