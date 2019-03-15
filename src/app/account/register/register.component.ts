import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { UserComponent } from '../user/user.component';
import { UserModel } from '../shared/user.model';
import { DriverLicenseComponent } from '../driver-license/driver-license.component';
import { DriverLicenseModel } from '../shared/driver-license.model';
import { CreditCardComponent } from '../../shared/credit-card/credit-card.component';
import { CreditCardModel } from '../../shared/models/credit-card.model';
import { AddressComponent } from '../../shared/address/address.component';
import { AddressModel } from '../../shared/models/address.model';
import { CreateApplicationUserModel } from '../shared/create-application-user.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  activePanel = 'contact';
  modelState: any;
  registerForm: FormGroup;
  processing = false;
  submitted = false;

  constructor(private fb: FormBuilder, private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      user: UserComponent.buildUser(this.fb, new UserModel()),
      driverLicense: DriverLicenseComponent.buildDriverLicense(this.fb, new DriverLicenseModel()),
      creditCard: CreditCardComponent.buildCreaditCard(this.fb, new CreditCardModel()),
      billingAddress: AddressComponent.buildAddress(this.fb, new AddressModel())
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.registerForm.valid) {
      return;
    }
    const model = _.cloneDeep(this.registerForm.value) as CreateApplicationUserModel;
    model.password = model.user.password;
    model.creditCard.expirationTime = this.convertToDate(model.creditCard.expirationTime);

    this.processing = true;
    this.authSvc.register(model).subscribe(user => {
      this.processing = false;

      // navigates to the home page
      this.router.navigate(['/']);
    }, error => {
      this.modelState = error;
      this.processing = false;
    });
  }

  private convertToDate(date: any): string {
    return (date) ? (new Date(date.year, date.month - 1, date.day)).toLocaleString()
            : null;
  }
}
