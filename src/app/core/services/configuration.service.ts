
import {switchMap, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Settings} from '../settings';
import {Configuration} from '../models/configuration';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  constructor(private http: HttpClient, private config: Settings) {

  }

  public loadConfig(): Promise<any> {
    console.log(environment);
    return new Promise<any>((resolve, reject) => {
      const observable = this.http.get<Configuration>('assets/config.json');
      if (environment.production) {
        let devConfig: Configuration;
        observable.pipe(switchMap(
                      config => {
                        devConfig = config;
                        return this.http.get<Configuration>('assets/configprod.txt');
                      })).subscribe(prodConfig => {
                          this.config.configuration = Object.assign(devConfig, prodConfig);
                          console.log(this.config);
                          resolve(null);
                      });
      } else {
        observable.subscribe(config => {
          this.config.configuration = config;
          resolve(null);
        });
      }
    });
  }
}
