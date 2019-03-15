import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ResolvedData} from './resolved-data';

@Component({
  selector: 'app-available-car',
  templateUrl: './available-car.component.html',
  styleUrls: ['./available-car.component.css']
})
export class AvailableCarComponent implements OnInit {
  hasError = false;
  modelState = null;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      const resolvedData = data.resolvedData as ResolvedData;
      if (resolvedData.error) {
        this.hasError = true;
        this.modelState = resolvedData.error;
      } else {
        this.hasError = false;
        this.modelState = null;
      }
    });
   }

  ngOnInit() {
  }

}
