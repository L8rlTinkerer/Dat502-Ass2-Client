import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddviewingResponse } from './addviewing-response.model';

@Injectable({
  providedIn: 'root'
})
export class AddviewingService {
  baseURL: string = "https://localhost:5001/api/viewing/";

  constructor(private http: HttpClient) { }

  addViewing(newAdvert: any){
    console.log(newAdvert);
    var headers = new HttpHeaders({
        "Content-Type": "application/json"
    });
    return this.http.post<AddviewingResponse>(this.baseURL + "addviewing", newAdvert, {
        headers: headers
    });

};

}
