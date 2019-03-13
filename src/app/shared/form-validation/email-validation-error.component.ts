import { Host, SkipSelf, Inject, Component } from '@angular/core'
import { NgControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { ValidationType, ValidationErrorComponent } from './validation-error.component';
import { EmailValidator } from './validators/email.validator';

@Component({
    selector: 'err-email',
    template: `<div *ngIf="!isValid()" class="alert alert-danger">
                    {{message}}
                  </div>`
})
@ValidationType(EmailValidator)
export class EmailValidationErrorComponent extends ValidationErrorComponent {
    constructor(
        @Host() @SkipSelf() control: NgControl,
        @Host() @SkipSelf() @Inject(NG_VALIDATORS) validators: Array<Validator | ValidatorFn>) {
        super(control, validators);
    }
}
