import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AddressModel } from '../models/address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input()
  addressForm: FormGroup;

  static buildAddress(fb: FormBuilder, address: AddressModel): FormGroup {
    return fb.group({
      id: address.id,
      streetAddress: [address.streetAddress, Validators.required],
      suiteNumber: address.suiteNumber,
      city: [address.city, Validators.required],
      state: address.state,
      zip: [address.zip, Validators.required]
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
