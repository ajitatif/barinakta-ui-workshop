import { Injectable } from '@angular/core';

import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Shelter } from '../shelter.model';

@Injectable()
export class ShelterService {

    private apiUrl = 'http://localhost:8080/shelter';

    public constructor(private http: Http) { }

    public getShelters(): Observable<Shelter[]> {

        return this.http.get(this.apiUrl).map(this.extractShelterList);
    }

    public updateShelter(shelter: Shelter): Promise<Shelter> {
        let options = new RequestOptions();
        options.headers = new Headers({ 'Content-Type': 'application/json'});
        return this.http.put(this.apiUrl + '/' + shelter.id, JSON.stringify(shelter), options).toPromise().then(this.extractShelter);
    }

    private extractShelterList(response: Response): Shelter[] {
        let data = response.json();

        let shelters: Shelter[] = [];
        if (!!data) {
            for (let item of data) {
                shelters.push(new Shelter(item.id, item.name, item.phone));
            }
        }

        return shelters;
    }

    private extractShelter(response: Response): Shelter {
        let item = response.json();

        if (!!item) {
            return new Shelter(item.id, item.name, item.phone);
        }

        return null;
    }
}