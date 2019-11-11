import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientDashboardModel } from '../core_modules/dashboard/dashboard/Models/client-dashboard.model';


@Injectable()
export class DashBoardService {

    baseURL: string = "https://localhost:5001/api/dashboard/";

    constructor(private http: HttpClient){}

    // Retrieve dashboard methods for all user types:
    GetClientDashBoard(userId: string): Observable<ClientDashboardModel>{
        return this.http.get<ClientDashboardModel>(this.baseURL + userId);
    }

    

}
