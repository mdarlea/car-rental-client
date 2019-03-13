import * as moment from 'moment';
import { Directive, Optional, Injectable, forwardRef, ElementRef, Input, Self } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl} from '@angular/forms';


@Directive({
    selector: '[future-time][ngModel],[future-time][formControl]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => TimeValidator),
            multi: true
        }
    ]

})
export class TimeValidator implements Validator {
    // tslint:disable-next-line:no-input-rename
    @Input('time-range') timeRange: string;
    constructor(public element: ElementRef) {

    }

    validate(c: FormControl): { [index: string]: any; } {
        const value = c.value;
        if (!value) {
            return {
                validateTime: {
                    valid: false
                }
            };
        }

        const now = new Date();
        const fieldValue = moment(value).toDate();
        if (fieldValue < now) {
            return {
                validateTime: {
                    valid: false
                }
            };
        }

        return null;
    }

}
