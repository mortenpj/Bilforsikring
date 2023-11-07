import {Injectable} from "@angular/core";
import {ApiService} from "../../../../services/api.service";
import {CarInsurance, CarInsurancePost} from "../model/car-insurance";
import {Observable} from "rxjs";

@Injectable()
export class CarInsuranceFacade {

    constructor(private apiService: ApiService) {
    }

    public createCarInsurance(carInsurancePost: CarInsurancePost): Observable<any> {
        return this.apiService.create('/bilforsikring/', carInsurancePost)
    }

}
