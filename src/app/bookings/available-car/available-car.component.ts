import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable} from 'rxjs';

import { ResolvedData} from './resolved-data';
import { AvailableCarsService } from '../../core/services/available-cars.service';
import { AvailableCar } from '../shared/available-car';

@Component({
  selector: 'app-available-car',
  templateUrl: './available-car.component.html',
  styleUrls: ['./available-car.component.css']
})
export class AvailableCarComponent implements OnInit {
  hasError = false;
  modelState = null;
  from: Observable<Date>;
  to: Observable<Date>;
  availableCar: AvailableCar;

  constructor(private route: ActivatedRoute, availableCarsSvc: AvailableCarsService) {
    this.route.data.subscribe(data => {
      const resolvedData = data.resolvedData as ResolvedData;
      if (resolvedData.error) {
        this.hasError = true;
        this.modelState = resolvedData.error;
      } else {
        this.hasError = false;
        this.modelState = null;
      }
      this.availableCar = resolvedData.availableCar;
    });
    this.from = availableCarsSvc.from$;
    this.to = availableCarsSvc.to$;
   }

  ngOnInit() {
  }

}
