import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { AvailableCarsService } from '../../core/services/available-cars.service';
import { AvailableCarModel } from '../../core/models/available-car.model';

@Component({
  selector: 'app-available-cars',
  templateUrl: './available-cars.component.html',
  styleUrls: ['./available-cars.component.css']
})
export class AvailableCarsComponent implements OnInit {
  availableCars: Observable<AvailableCarModel[]>;

  constructor(availableCarsSvc: AvailableCarsService) {
    this.availableCars = availableCarsSvc;
  }

  ngOnInit() {
  }

}
