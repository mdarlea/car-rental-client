import { Directive, Optional, Injectable, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Injectable()
export abstract class EmailBlackList {
    abstract isValidEmail(email: string): boolean;
}

@Directive({
    selector:'[email][ngModel],[email][formControl],[email][formControlName]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => EmailValidator),
        multi: true
    }]

})
export class EmailValidator implements Validator {
    private blackList: EmailBlackList = null;

    constructor(@Optional() blackList: EmailBlackList) {
        if (blackList) {
            this.blackList = blackList;
        }
    }

    validate(c: FormControl): { [index: string]: any; } {
        const emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        const value: string = c.value;
        let valid = true;
        if (this.blackList) {
            valid = this.blackList.isValidEmail(value);
        }
        if (valid) {
            valid = emailRegexp.test(c.value);
        }

        return (valid) ? null : {
            validateEmail: {
                valid
            }
        };
    }
}
