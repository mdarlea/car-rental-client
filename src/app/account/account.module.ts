import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './shared/auth.service';
import { UserComponent } from './user/user.component';
import { DriverLicenseComponent } from './driver-license/driver-license.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, UserComponent, DriverLicenseComponent],
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AccountModule { }
