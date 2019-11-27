import { Injectable } from '@angular/core';
import { DashBoardService } from 'src/app/shared/dashboard.service';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { BranchService } from '../branch/branch.service';
import { PropertyTypes } from './models/propertytypes.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddPropertyResponse } from './models/addproperty-response.model';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  
  basePropertyURL: string = "https://localhost:5001/api/property/";
  
  constructor(private branchService: BranchService, private dashBoardService: DashBoardService, private authService: AuthenticationService, private http: HttpClient) { }

  
  getPropertyTypes(){
    var headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
      return this.http.get<PropertyTypes[]>(this.basePropertyURL + "propertytype", {
        headers: headers
    });
  }

  addProperty(property: any): Observable<AddPropertyResponse>{
    var headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post<AddPropertyResponse>(this.basePropertyURL + "addproperty", property, {
      headers: headers
    });
  }

}
 