import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable} from 'rxjs';

import { ResolvedData} from './resolved-data';
import { AvailableCarsService } from '../../core/services/available-cars.service';
import { AvailableCar } from '../shared/available-car';
import { BookingService } from '../shared/booking.service';
import { CreateBookingCommand } from '../shared/create-booking-command';

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
  bookingComplete = false;
  processing = false;

  constructor(private route: ActivatedRoute, private availableCarsSvc: AvailableCarsService, private bookingSvc: BookingService) {
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
      this.bookingComplete = false;
    });
    this.from = availableCarsSvc.from$;
    this.to = availableCarsSvc.to$;
   }

  ngOnInit() {
  }

  onSubmit() {
    const command = new CreateBookingCommand();
    command.from = (this.availableCarsSvc.fromDate) ? this.availableCarsSvc.fromDate.toLocaleString() : null;
    command.to = (this.availableCarsSvc.toDate) ? this.availableCarsSvc.toDate.toLocaleString() : null;
    command.availableCarId = this.availableCar.id;

    this.processing = true;
    this.bookingSvc.createBooking(command).subscribe(result => {
      this.processing = false;
      this.bookingComplete = true;
    }, error => {
      this.modelState = error;
      this.processing = false;
    })
  }
}
