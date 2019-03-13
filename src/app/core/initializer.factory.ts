import {Injector} from '@angular/core';
import {LOCATION_INITIALIZED} from '@angular/common';
import {ConfigurationService} from './services/configuration.service';

export function configInitializerFactory(configurationSvc: ConfigurationService, injector: Injector) {
    return () => new Promise<any>((resolve: any) => {
      const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
      locationInitialized.then(() => {
        configurationSvc.loadConfig().then(() => resolve(null));
      });
    });
}
