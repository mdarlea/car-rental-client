import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Storage } from './storage/storage';
import { AuthUser } from '../models/auth-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private userChanged = new Subject<AuthUser>();

    userChanged$ = this.userChanged.asObservable();

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
    setUser(value: AuthUser) {
        this.storage.setItem(this.storageKey, value);
        this.userChanged.next(value);
    }

    removeUser() {
        this.storage.removeItem(this.storageKey);
        this.userChanged.next(null);
    }
}
