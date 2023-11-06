import {Injectable} from "@angular/core";
import {ApiService} from "../../../../services/api.service";
import {CarInsurance} from "../model/car-insurance";

@Injectable()
export class CarInsuranceFacade {

    constructor(private apiService: ApiService) {
    }

    public createCarInsurance(carInsurance: CarInsurance){
        this.apiService.create('/bilforsikring/', carInsurance)
    }

}
