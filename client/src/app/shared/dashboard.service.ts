import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientDashboardModel } from '../core_modules/dashboard/dashboard/Models/client-dashboard.model';
import { CreateClientBranchRegoResponseModel } from '../core_modules/dashboard/assistant-dashboard/CreateClientBranchRegoResponseModel.model';
import { CreateBranchResponseModel } from '../core_modules/dashboard/dashboard/Models/CreateBranchResponseModel.model';
import { AddPropertyResponse } from '../featured/property/models/addproperty-response.model';



@Injectable()
export class DashBoardService {

    baseURL: string = "https://localhost:5001/api/dashboard/";
    baseCBRURL: string = "https://localhost:5001/api/clientbranchregister/";
    baseBranchURL: string = "https://localhost:5001/api/branch/";
    basePropertyURL: string = "https://localhost:5001/api/property/";

    constructor(private http: HttpClient){}

    // Retrieve dashboard methods for all user types:
    GetClientDashBoard(userId: string): Observable<ClientDashboardModel>{
        return this.http.get<ClientDashboardModel>(this.baseURL + userId);
    }

    registerClientWithBranch(clientBranchRego: any){
        console.log(clientBranchRego);
        var headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return this.http.post<CreateClientBranchRegoResponseModel>(this.baseCBRURL + "addclientbranchrego", clientBranchRego, {
            headers: headers
        });

    };

    createNewBranch(branchRego: any){
        console.log(branchRego);
        var headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return this.http.post<CreateBranchResponseModel>(this.baseBranchURL + "addbranch", branchRego, {
            headers: headers
        });

    };


    addProperty(newProperty: any){
        console.log(newProperty);
        var headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return this.http.post<AddPropertyResponse>(this.basePropertyURL + "addproperty", newProperty, {
            headers: headers
        });
    }


}
