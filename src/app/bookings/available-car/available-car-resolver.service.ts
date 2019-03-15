import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

import { ResolvedData } from './resolved-data';
import { AvailableCar } from '../shared/available-car';
import { AvailableCarService } from '../shared/available-car.service';

@Injectable()
export class AvailableCarResolver implements Resolve<ResolvedData> {
  constructor(private availableCarSvc: AvailableCarService) {

  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ResolvedData> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Available car id was not a number: ${id}`;
      console.error(message);
      return of({ availableCar: null, error: {message} });
    }

    return this.availableCarSvc.findById(+id)
      .pipe(
        map(data => {
          return { availableCar: data };
        }),
        catchError(error => {
          return of({ availableCar: null, error });
        })
      );
  }
}
