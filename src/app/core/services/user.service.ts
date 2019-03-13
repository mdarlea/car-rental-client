import { Injectable } from '@angular/core';
import { Storage } from './storage/storage';
import { AuthUser } from '../models/auth-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private storageKey = 'carRentalUser2019';

    constructor(private storage: Storage) {
    }

    static tokenIsExpired(user: AuthUser): boolean {
      // ToDo: verify the token expiration date
      return (user && user.token) ? false : true;
    }

    getUser(): AuthUser {
        return this.storage.getItem<AuthUser>(this.storageKey);
    }
    setUser(value: AuthUser | any) {
        this.storage.setItem(this.storageKey, value);
    }

    removeUser() {
        this.storage.removeItem(this.storageKey);
    }
}
