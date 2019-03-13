import {Injectable} from '@angular/core';
import {Configuration} from './models/configuration';

@Injectable({
  providedIn: 'root',
})
export class Settings {
  configuration: Configuration;
}
