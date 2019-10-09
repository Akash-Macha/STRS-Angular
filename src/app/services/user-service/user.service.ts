import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/Department';
import { Priority } from 'src/app/models/Priority';
import { Ticket } from '../../models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url:string= 'http://localhost:8181';

  constructor(private _http:HttpClient) { }

  getAllTickets(): Observable<Ticket[]>{
    let user_name:string = sessionStorage.getItem('user_name');

    return this._http.get<Ticket[]>(this._url + '/ticket/getAll/' + user_name);
  }

  getListOfDepartments(): Observable<Department[]>{
    // url: user/getDepartments
    return this._http.get<Department[]>(this._url + '/user/getDepartments');
  }

  getListOfPriorities(): Observable<Priority[]>{
    // url : priority/getAllPriorities
    return this._http.get<Priority[]>(this._url + '/user/getPriorities');
  }

  insertTicket(newTicket:Ticket): Observable<any>{
    // url :      /user/insertTicket
    // accepts :  Ticket object
    console.log('BEFORE MAKING REST CALL: TICKET = ' + JSON.stringify(newTicket));
    
    return this._http.post<any>(this._url + '/user/insertTicket', newTicket );
  }

}
