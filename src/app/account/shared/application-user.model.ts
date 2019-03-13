import { UserModel } from './user.model';
import { DriverLicenseModel } from './driver-license.model';
import { AddressModel } from '../../shared/models/address.model';
import { CreditCardModel } from '../../shared/models/credit-card.model';

export class ApplicationUserModel {
  user: UserModel;
  driverLicense: DriverLicenseModel;
  creditCard: CreditCardModel;
  billingAddress: AddressModel;
}
