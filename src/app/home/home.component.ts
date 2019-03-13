import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  startTime: Date;
  endTime: Date;

  @ViewChild('startTimeControl') startTimeControl: NgModel;

  constructor() { }

  ngOnInit() {
    this.startTimeControl.reset();
  }
}
