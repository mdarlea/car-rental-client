import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject, Subject } from 'rxjs';

import { AvailableCarModel } from '../models/available-car.model';
import { FindAvailableCarsModel } from '../models/find-available-cars.model';
import { HttpErrorHandlerService, HandleError} from './http-error-handler.service';
import { LoaderService } from './loader.service';
import { Settings} from '../../core/settings';

@Injectable({
  providedIn: 'root'
})
export class AvailableCarsService extends BehaviorSubject<AvailableCarModel[]> {
    private fromSource = new BehaviorSubject<Date>(null);
    private toSource = new BehaviorSubject<Date>(null);
    private route: string;
    private handleError: HandleError;

    from$ = this.fromSource.asObservable();
    to$ = this.toSource.asObservable();

    constructor(private settings: Settings,
                private http: HttpClient,
                private exceptionSvc: HttpErrorHandlerService,
                private loaderSvc: LoaderService) {
      super(new Array<AvailableCarModel>());
      this.handleError = exceptionSvc.createHandleError('UserAddressService');
      this.route = `${settings.configuration.url.availableCar}/`;
    }

    query(model: FindAvailableCarsModel) {
      this.loaderSvc.loadData(true);
      this.fetch(model).subscribe(addr => {
        super.next(addr);

        this.fromSource.next(new Date(model.from));
        this.toSource.next(new Date(model.to));

        this.loaderSvc.loadData(false);
      }, error => {
        this.loaderSvc.loadData(false);
        super.error(error);
      });
    }

    private fetch(model: FindAvailableCarsModel): Observable<AvailableCarModel[]> {
        const url = `${this.route}`;

        return this.http.post<AvailableCarModel[]>(url, model).pipe(catchError(this.handleError('fetch',[])));
    }
}
