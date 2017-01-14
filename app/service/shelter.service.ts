import { Injectable } from '@angular/core';

import { Shelter } from '../shelter.model';
@Injectable()
export class ShelterService {

    public getShelters(): Shelter[] {
        let shelters: Shelter[] = [];
        shelters.push(new Shelter(1, 'Kadıköy', '0 (216) 415 67 11'));
        shelters.push(new Shelter(2, 'Üsküdar', '0 (216) 393 00 10'));

        return shelters;
    }
}