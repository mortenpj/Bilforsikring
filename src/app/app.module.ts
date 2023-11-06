import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { CarInsuranceComponent } from './modules/portal/components/car-insurance/component/car-insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    CarInsuranceComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NgOptimizedImage,
        FormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
