import {ApplicationUserModel} from './application-user.model';

export class CreateExternalApplicationUserModel extends ApplicationUserModel {
    provider: string;
    providerKey: string;
}
