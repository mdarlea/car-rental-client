import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserComponent } from '../user/user.component';
import { UserModel } from '../shared/user.model';
import { DriverLicenseComponent } from '../driver-license/driver-license.component';
import { DriverLicenseModel } from '../shared/driver-license.model';
import { CreditCardComponent } from '../../shared/credit-card/credit-card.component';
import { CreditCardModel } from '../../shared/models/credit-card.model';
import { AddressComponent } from '../../shared/address/address.component';
import { AddressModel } from '../../shared/models/address.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  activePanel = 'contact';

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      user: UserComponent.buildUser(this.fb, new UserModel()),
      driverLicense: DriverLicenseComponent.buildDriverLicense(this.fb, new DriverLicenseModel()),
      creditCard: CreditCardComponent.buildCreaditCard(this.fb, new CreditCardModel()),
      billingAddress: AddressComponent.buildAddress(this.fb, new AddressModel())
    });
  }

}
