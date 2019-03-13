import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { CoreModule} from './core/core.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule} from './app-routing.module';
import { SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
