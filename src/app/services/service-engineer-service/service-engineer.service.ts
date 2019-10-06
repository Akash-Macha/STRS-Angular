import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/models/Ticket';
import { Department } from 'src/app/models/Department';

@Injectable({
  providedIn: 'root'
})
export class ServiceEngineerService {
  

  private _url:string= 'http://localhost:8181';

  constructor(private _http:HttpClient) { }

  getAgingOfOpenTicket(): Observable<Ticket[]>{
    let user_name:string = sessionStorage.getItem('user_name');

    return this._http.get<Ticket[]>(this._url + '/serviceEngineer/getAgingOfOpenTicket/' + user_name);
  }

  getStatsOfEngineer(): Observable<any>{
    return this._http.get<any>(this._url + '/serviceEngineer' + '/getStatsOfEngineer');
  }

  getStatsOfSeverity(): Observable<any>{
    return this._http.get<any>(this._url + '/serviceEngineer/getStatsOfSeverity');
  }
  
  getAllTickets(): Observable<Ticket[]>{
    let user_name:string = sessionStorage.getItem('user_name');

    return this._http.get<Ticket[]>(this._url + '/ticket/getAll/' + user_name);
  }

  getListOfDepartments() {
    // URL: GET: user/getDepartments
    return this._http.get<Department[]>(this._url + '/user/getDepartments');
    // throw new Error("Method not implemented.");
  }
}
