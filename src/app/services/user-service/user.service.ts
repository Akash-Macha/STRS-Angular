import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ticket } from '../../models/Ticket';
import { Priority } from 'src/app/models/Priority';
import { Department } from 'src/app/models/Department';

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

  getAllDepartments(): Observable<Department[]>{
    // url: user/getDepartments
    return this._http.get<Department[]>(this._url + '/user/getDepartments');
  }

  getAllPriorities(): Observable<Priority[]>{
    // url : priority/getAllPriorities
    return this._http.get<Priority[]>(this._url + '/priority/getAllPriorities');
  }
}
