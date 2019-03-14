import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimeValidator } from './validators/time.validator';

import {
    RequiredValidationErrorComponent,
    MinLengthValidationErrorComponent,
    MaxLengthValidationErrorComponent,
    PatternValidationErrorComponent
} from './validation-error.components';
import { TimeValidationErrorComponent } from './time-validation-error.component';
import { ValidationErrorsComponent} from './validation-errors.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
       ValidationErrorsComponent,
        TimeValidator,
        RequiredValidationErrorComponent,
        MinLengthValidationErrorComponent,
        MaxLengthValidationErrorComponent,
        PatternValidationErrorComponent,
        TimeValidationErrorComponent
    ],
    exports: [
        ValidationErrorsComponent,
        TimeValidator,
        RequiredValidationErrorComponent,
        MinLengthValidationErrorComponent,
        MaxLengthValidationErrorComponent,
        PatternValidationErrorComponent,
        TimeValidationErrorComponent
    ]
})
export class FormValidationModule { }
