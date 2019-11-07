import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../core_modules/login/login.model';
import { RegisterClientResponseModel } from '../core_modules/register-client/register-client-response.model';


@Injectable()

export class AuthenticationService {

    baseURL: string = "https://localhost:5001/api/systemuser/";
    

    constructor(private http: HttpClient) {

    }


    login(user: any): Observable<LoginModel>{
        var headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return this.http.post<LoginModel>(this.baseURL + "login", user, {
            headers: headers
        });
    } 
    
    register(user: any): Observable<RegisterClientResponseModel>{
        console.log(user);
        var headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return this.http.post<RegisterClientResponseModel>(this.baseURL + "register", user, {
            headers: headers
        });
    }
    
}

