import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BookingsRoutingModule } from './bookings-routing.module';
import { AvailableCarsComponent } from './available-cars/available-cars.component';
import { AvailableCarService } from './shared/available-car.service';
import { AvailableCarComponent } from './available-car/available-car.component';
import { AvailableCarResolver } from './available-car/available-car-resolver.service';
import { BookingService } from './shared/booking.service';

@NgModule({
  declarations: [AvailableCarsComponent, AvailableCarComponent],
  imports: [
    SharedModule,
    BookingsRoutingModule
  ],
  providers: [
    AvailableCarService,
    AvailableCarResolver,
    BookingService
  ]
})
export class BookingsModule { }
