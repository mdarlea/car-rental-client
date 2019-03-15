import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router} from '@angular/router';

import { AvailableCarsService } from '../core/services/available-cars.service';
import {FindAvailableCarsModel} from '../core/models/find-available-cars.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  startTime: Date;
  endTime: Date;

  constructor(private availableCarsSvc: AvailableCarsService, private router: Router) { }

  ngOnInit() {
    const start = new Date();
    start.setDate(start.getDate() + 1);
    start.setHours(10);
    start.setMinutes(0);
    const end = new Date();
    end.setDate(start.getDate() + 3);
    end.setHours(10);
    end.setMinutes(0);
    this.startTime = start;
    this.endTime = end;
  }

  onSubmit(form) {
    if (!form.valid) { return; }

    const model = new FindAvailableCarsModel();
    model.from = this.startTime.toLocaleString();
    model.to = this.endTime.toLocaleString();

    this.availableCarsSvc.query(model);
    this.router.navigate(['/bookings']);
  }
}
