import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, map, throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    API_URL = "localhost"; //Hentes fra envirnment fil
    constructor(private http: HttpClient){}

    public create(url: string, postbody: any) {
        return this.http.post(`${this.API_URL}/${url}`, postbody)
            .pipe(
                map((response: any) => {
                    return response
                })
            ),
            catchError(async error => {
                return throwError(error);
            })
    }

    public get(url: string){
        return this.http.get(`${this.API_URL}`)
            .pipe(
                map((response: any) => {
                    return response;
                })
            ),
            catchError(async error => {
                return throwError(error);
            })
    }
}
