import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from '../../core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  loading = false;
  loadingData = false;

  constructor(private loaderSvc: LoaderService, ref: ChangeDetectorRef) {
    this.loaderSvc.loading$.subscribe(loading => {
      this.loading = loading;
      // ref.detectChanges();
    });
    this.loaderSvc.loadingData$.subscribe(loadingData => {
      this.loadingData = loadingData;
    });
   }

  ngOnInit() {
  }

}
