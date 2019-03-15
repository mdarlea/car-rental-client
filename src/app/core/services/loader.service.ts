import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
    private loadingSource = new Subject<boolean>();
    loading$ = this.loadingSource.asObservable();

    private loadingDataSource = new Subject<boolean>();
    loadingData$ = this.loadingDataSource.asObservable();

    load(loading: boolean) {
      this.loadingSource.next(loading);
    }

    loadData(loadingData: boolean) {
      this.loadingDataSource.next(loadingData);
    }
}
