import { Component } from '@angular/core';
import {Bonus, BonusValues} from "./car-insurance";

@Component({
  selector: 'app-car-insurance',
  templateUrl: './car-insurance.component.html',
  styleUrls: ['./car-insurance.component.scss']
})
export class CarInsuranceComponent {

    public licensePlate: string = "";
    bonusValues = BonusValues
    selectedBonus: Bonus = <Bonus>{};

}
