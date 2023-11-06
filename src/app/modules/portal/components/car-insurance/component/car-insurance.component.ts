import {Component, ViewChild} from '@angular/core';
import {Bonus, BonusValues} from "../model/car-insurance";

import * as validator from "@navikt/fnrvalidator";

@Component({
  selector: 'app-car-insurance',
  templateUrl: './car-insurance.component.html',
  styleUrls: ['./car-insurance.component.scss']
})
export class CarInsuranceComponent {

    licensePlate: string | undefined;
    bonusValues = BonusValues
    selectedBonus: Bonus | undefined;
    personalNumber: string = "";
    fornavn: string | undefined;
    etternavn: string | undefined;
    email: string | undefined;
    isPersonalNumberValid: boolean = true;

    constructor() {
        this.selectedBonus = this.bonusValues[0];
    }

    personalNumberChange(){
        const isValid = validator.idnr(this.personalNumber).status;
        this.isPersonalNumberValid = isValid === "valid";
    }
}
