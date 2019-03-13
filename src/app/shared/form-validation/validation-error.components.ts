import { Host, SkipSelf, Inject , Component} from '@angular/core'
import { NgControl } from '@angular/forms';
import {
    NG_VALIDATORS, Validator, ValidatorFn,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator
} from '@angular/forms';
import { ValidationType, ValidationErrorComponent } from './validation-error.component'

@Component({
    selector: 'err-required',
    template: `<div *ngIf="!isValid()" class="alert alert-danger">
                    {{message}}
                  </div>`
})
@ValidationType(RequiredValidator)
export class RequiredValidationErrorComponent extends ValidationErrorComponent {
    constructor(
        @Host() control: NgControl,
        @Host() @Inject(NG_VALIDATORS) validators: Array<Validator | ValidatorFn>) {
        super(control, validators);
    }
}

@Component({
    selector: 'err-minlength',
    template: `<div *ngIf="!isValid()" class="alert alert-danger">
                    {{message}}
                  </div>`
})
@ValidationType(MinLengthValidator)
export class MinLengthValidationErrorComponent extends ValidationErrorComponent {
    constructor(
        @Host() control: NgControl,
        @Host() @Inject(NG_VALIDATORS) validators: Array<Validator | ValidatorFn>) {
        super(control, validators);
    }
}

@Component({
    selector: 'err-maxlength',
    template: `<div *ngIf="!isValid()" class="alert alert-danger">
                    {{message}}
                  </div>`
})
@ValidationType(MaxLengthValidator)
export class MaxLengthValidationErrorComponent extends ValidationErrorComponent {
    constructor(
        @Host() control: NgControl,
        @Host() @Inject(NG_VALIDATORS) validators: Array<Validator | ValidatorFn>) {
        super(control, validators);
    }
}

@Component({
    selector: 'err-pattern',
    template: `<div *ngIf="!isValid()" class="alert alert-danger">
                    {{message}}
                  </div>`
})
@ValidationType(PatternValidator)
export class PatternValidationErrorComponent extends ValidationErrorComponent {
    constructor(
        @Host() control: NgControl,
        @Host() @Inject(NG_VALIDATORS) validators: Array<Validator | ValidatorFn>) {
        super(control, validators);
    }
}
