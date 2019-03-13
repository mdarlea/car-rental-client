import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

import {DriverLicenseModel } from '../shared/driver-license.model';

@Component({
  selector: 'app-driver-license',
  templateUrl: './driver-license.component.html',
  styleUrls: ['./driver-license.component.css']
})
export class DriverLicenseComponent implements OnInit {
  @Input()
  driverLicenseForm: FormGroup;

  static buildDriverLicense(fb: FormBuilder, driverLicense: DriverLicenseModel): FormGroup {
    return fb.group({
      id: driverLicense.id,
      driverLicenseNumber: [driverLicense.driverLicenseNumber, Validators.required],
      countryOfIssue: [driverLicense.countryOfIssue, Validators.required],
      stateOfIssue: driverLicense.stateOfIssue
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
