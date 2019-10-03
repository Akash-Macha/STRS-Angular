import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
