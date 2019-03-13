import { Injectable } from '@angular/core';
import { Storage } from './storage';

export class AmplifyLocalStorage extends Storage  {
    getItem<T>(key: string): any {
        return <T>amplify.store(key);
    }

    setItem<T>(key: string, value: T) {
        amplify.store(key, value);
    }

    removeItem(key: string) {
        amplify.store(key, null);
    }
}
