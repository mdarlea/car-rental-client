import { Injectable } from '@angular/core';

@Injectable()
export abstract class Storage {
   abstract getItem<T>(key: string): any;
   abstract setItem<T>(key: string, value: T): void;
   abstract removeItem(key: string): void;
}
