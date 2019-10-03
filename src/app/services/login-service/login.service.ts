import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/User';
import { Role } from '../../models/Role';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url:string= 'http://localhost:8181';

  constructor(private _http:HttpClient) { }

  validateAndGetRole(user: User): Observable<Role>{
    return this._http.post<Role>(this._url + '/user/Validate', user);
  }
}
