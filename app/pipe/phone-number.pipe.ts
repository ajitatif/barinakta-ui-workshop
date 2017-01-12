import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phonenumber' })
export class PhoneNumberPipe implements PipeTransform {

    transform(value: string): string {
        return value[0] != '+' ? '+9' + value : value;
    }
}