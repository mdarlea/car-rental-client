import { Injectable } from '@angular/core';
import { Storage } from './storage';

export class AppLocalStorage extends Storage  {
    private storage = new LocalStorage();

    getItem<T>(key: string): any {
        const val = this.storage.localStorageGet(key);
        return JSON.parse(val) as T;
    }

    setItem<T>(key: string, value: T) {
        const val = JSON.stringify(value);
        this.storage.localStorageSet(key, val);
    }

    removeItem(key: string) {
        this.storage.localStorageRemove(key);
    }
}
