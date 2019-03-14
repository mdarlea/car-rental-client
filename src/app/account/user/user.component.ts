import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserModel } from '../shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  userForm: FormGroup;

  @Input()
  submitted: boolean;

  get f() { return this.userForm.controls; }

  static buildUser(fb: FormBuilder, user: UserModel): FormGroup {
    return fb.group({
      email: [user.email, [Validators.required, Validators.email]],
      password: [user.password, [Validators.required, Validators.minLength(10)]],
      firstName: [user.firstName, Validators.required],
      lastName: [user.lastName, Validators.required],
      phoneNumber: user.phoneNumber
    });
  }

  constructor() { }

  ngOnInit() {
  }


}
