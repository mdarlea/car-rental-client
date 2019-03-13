import { Host, SkipSelf, Inject, Component } from '@angular/core';
import { NgControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { ValidationType, ValidationErrorComponent } from './validation-error.component';
import { TimeValidator } from './validators/time.validator';

@Component({
    selector: 'err-future-time',
    template: `<div *ngIf="!isValid()" class="alert alert-danger">
                    {{message}}
                  </div>`
})
@ValidationType(TimeValidator)
export class TimeValidationErrorComponent extends ValidationErrorComponent {
    constructor(
        @Host() @SkipSelf() control: NgControl,
        @Host() @SkipSelf() @Inject(NG_VALIDATORS) validators: Array<Validator | ValidatorFn>) {
        super(control, validators);
    }
}
