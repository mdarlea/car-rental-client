import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmailValidator } from './validators/email.validator';
import { TimeValidator } from './validators/time.validator';

import {
    RequiredValidationErrorComponent,
    MinLengthValidationErrorComponent,
    MaxLengthValidationErrorComponent,
    PatternValidationErrorComponent
} from './validation-error.components';
import { EmailValidationErrorComponent } from './email-validation-error.component';
import { TimeValidationErrorComponent } from './time-validation-error.component';
import { ValidationErrorsComponent} from './validation-errors.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
       ValidationErrorsComponent,
        EmailValidator,
        TimeValidator,
        RequiredValidationErrorComponent,
        MinLengthValidationErrorComponent,
        MaxLengthValidationErrorComponent,
        PatternValidationErrorComponent,
        EmailValidationErrorComponent,
        TimeValidationErrorComponent
    ],
    exports: [
        ValidationErrorsComponent,
        EmailValidator,
        TimeValidator,
        RequiredValidationErrorComponent,
        MinLengthValidationErrorComponent,
        MaxLengthValidationErrorComponent,
        PatternValidationErrorComponent,
        EmailValidationErrorComponent,
        TimeValidationErrorComponent
    ]
})
export class FormValidationModule { }
