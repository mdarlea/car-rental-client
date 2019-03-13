import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormValidationModule} from './form-validation/form-validation.module';
import { FormFieldsModule} from './form-fields/form-fields.module';
import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormValidationModule,
    FormFieldsModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormValidationModule,
    NgbModule,
    FormFieldsModule,
    LoaderComponent,
    SpinnerComponent,
    CreditCardComponent,
    AddressComponent
  ],
  declarations: [
    LoaderComponent,
    SpinnerComponent,
    CreditCardComponent,
    AddressComponent
  ],
  providers: []
})
export class SharedModule {}
