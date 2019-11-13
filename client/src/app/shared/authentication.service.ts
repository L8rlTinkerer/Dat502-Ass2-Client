import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../core_modules/login/login.model';
import { RegisterClientResponseModel } from '../core_modules/register-client/register-client-response.model';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable()

export class AuthenticationService {

    baseURL: string = "https://localhost:5001/api/systemuser/";

    loginStatus: boolean = false;

    

    constructor(private http: HttpClient, private cookie: CookieService) {}


    login(user: any): Observable<LoginModel>{
        var headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        return this.http.post<LoginModel>(this.baseURL + "login", user, { headers: headers })
        .pipe(
            tap(event => {
                if(event.success){
                    // store user id in cookie
                    this.storeUserId(event.userId.toString());
                    this.storeUserType(event.userType.toString());
                    this.userIsLoggedIn();
                }
            })
        )
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

    storeUserId(id: string){
        this.cookie.set("userId", id);
        console.log("was the userId cookie stored: ", this.cookie.get("userId"))
    }

    storeUserType(id: string){
        this.cookie.set("userType", id);
        console.log("was the userType cookie stored: ", this.cookie.get("userType"))
    }

    getUserId(){
        console.log("was the userId cookie set: ", this.cookie.get("userId"))
        return this.cookie.get("userId");
    }

    getUserType(){
        console.log("was the userType cookie set: ", this.cookie.get("userType"))
        return this.cookie.get("userType");
    }

    userIsLoggedIn(){
        this.loginStatus = true;
    }

    logUserOut(){
        this.cookie.delete("userId");
        this.loginStatus = false;
        return this.loginStatus;
    }
    

}

