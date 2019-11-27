import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetAllBranches } from './models/get-all-branches.model';


@Injectable({
  providedIn: 'root'
})
export class BranchService {

  
  baseBranchURL: string = "https://localhost:5001/api/branch/";

  constructor(private http: HttpClient){}

  getAllBranches(){
      var headers = new HttpHeaders({
          "Content-Type": "application/json"
      });
      return this.http.get<GetAllBranches[]>(this.baseBranchURL, {
          headers: headers
      });
  }
}
