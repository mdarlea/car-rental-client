import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth.guard';
import { AvailableCarsComponent } from './available-cars/available-cars.component';
import { AvailableCarComponent } from './available-car/available-car.component';
import { AvailableCarResolver} from './available-car/available-car-resolver.service';

const routes: Routes = [{
  path: '',
  component: AvailableCarsComponent,
  canActivate: [AuthGuard]
},
{
  path: 'available-car/:id',
  component: AvailableCarComponent,
  resolve: { resolvedData: AvailableCarResolver }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
