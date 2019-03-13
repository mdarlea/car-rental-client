import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { configInitializerFactory } from './initializer.factory';
import {APP_INITIALIZER, Injector} from '@angular/core';
import { LOCATION_INITIALIZED } from '@angular/common';

import {Storage} from './services/storage/storage';
import { AmplifyLocalStorage } from './services/storage/amplify-local-storage';
import { throwIfAlreadyLoaded} from './module-import-guard';
import {httpInterceptorProviders } from './http-interceptors/index';
import { ConfigurationService } from './services/configuration.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
         {
          provide: APP_INITIALIZER,
          useFactory: configInitializerFactory,
          deps: [ConfigurationService, Injector],
          multi: true
        },
        {
          provide: Storage,
          useClass: AmplifyLocalStorage
        },
        httpInterceptorProviders
      ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
