import { HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

import { CreateBookingCommand } from './create-booking-command';
import { Settings } from '../../core/settings';
import {HttpErrorHandlerService, HandleError} from '../../core/services/http-error-handler.service';

@Injectable()
export class BookingService {
  private route;
  private handleError: HandleError;

  constructor(private http: HttpClient, exceptionSvc: HttpErrorHandlerService, private settings: Settings) {
         this.handleError = exceptionSvc.createHandleError('BookingService');
         this.route = `${settings.configuration.url.booking}/`;
  }

  createBooking(command: CreateBookingCommand): Observable<any> {
    const url = `${this.route}`;

    return this.http.post(url, command).pipe(catchError(this.handleError('createBooking', {}, true)));
  }
}
