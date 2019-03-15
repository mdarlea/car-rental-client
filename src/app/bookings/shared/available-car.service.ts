import { HttpErrorResponse } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

import { AvailableCar } from './available-car';
import { Settings } from '../../core/settings';
import {HttpErrorHandlerService, HandleError} from '../../core/services/http-error-handler.service';

@Injectable()
export class AvailableCarService {
  private route;
  private handleError: HandleError;

  constructor(private http: HttpClient, exceptionSvc: HttpErrorHandlerService, private settings: Settings) {
         this.handleError = exceptionSvc.createHandleError('AvailableCarService');
         this.route = `${settings.configuration.url.availableCar}/`;
  }

  findById(id: number): Observable<AvailableCar> {
    const url = `${this.route}${id}`;

    return this.http.get<AvailableCar>(url).pipe(catchError(this.handleError('fetch', new AvailableCar(), true)));
  }
}
