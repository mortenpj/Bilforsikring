import {Component, ViewChild} from '@angular/core';
import {
    Bonus,
    BonusValues,
    CarInsurance,
    CarInsurancePost,
    Customer,
    CustomerPost,
} from "../model/car-insurance";

import * as validator from "@navikt/fnrvalidator";
import {CarInsuranceFacade} from "../facade/car-insurance.facade";

@Component({
  selector: 'app-car-insurance',
  templateUrl: './car-insurance.component.html',
  styleUrls: ['./car-insurance.component.scss']
})
export class CarInsuranceComponent {

    newInsurance: CarInsurance;

    bonusValues = BonusValues
    selectedBonus: Bonus;
    isPersonalNumberValid: boolean = true;

    constructor(private carInsuranceFacade: CarInsuranceFacade) {
        this.selectedBonus = this.bonusValues[0];
        this.newInsurance = {
            licenseplate: "",
            customer: {email: "", lastName: "", firstName: "", personalNumber: ""},
            bonus: this.selectedBonus
        }

    }

    personalNumberChange(){
        const isValid = validator.idnr(this.newInsurance.customer.personalNumber).status;
        this.isPersonalNumberValid = isValid === "valid";
    }

    buyInsurance(){
        this.carInsuranceFacade.createCarInsurance(this.createCarInsurancePost()).subscribe(response => {
            //Vis melding og status fra backend, eventuelt feilmeldinger
        })
    }

    cancelInsurance(){
        //Metode for å avbryte kjøp, lukke modal? Gå til forrige side?
        //Den koden kjøres her
    }

    createCarInsurancePost(): CarInsurancePost{
        let carInsurancePost: CarInsurancePost = <CarInsurancePost>{};
        carInsurancePost.registreringsNummer = this.newInsurance.licenseplate;
        carInsurancePost.bonus = this.selectedBonus.value;
        carInsurancePost.kunde = this.createCustomerPost(this.newInsurance.customer);
        carInsurancePost.antallAar = this.newInsurance.bonus.year;
        return carInsurancePost;
    }

    createCustomerPost(customer: Customer): CustomerPost {
        let customerPost: CustomerPost = <CustomerPost>{};
        customerPost.fodselsNummer = customer.personalNumber;
        customerPost.fornavn = customer.firstName;
        customerPost.etternavn = customer.lastName;
        customerPost.epost = customer.email;
        return customerPost;
    }


}
