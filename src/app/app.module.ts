import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { CarInsuranceComponent } from './modules/portal/components/car-insurance/component/car-insurance.component';
import {CarInsuranceFacade} from "./modules/portal/components/car-insurance/facade/car-insurance.facade";
import { HttpClientModule } from '@angular/common/http';


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
        FormsModule,
        HttpClientModule

    ],
  providers: [CarInsuranceFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
