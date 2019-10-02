import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { User } from '../../models/User';
import { Role } from '../../models/Role';
import { ReplaceSource } from 'webpack-sources';
import { type } from 'os';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url:string= 'http://localhost:8181/user/Validate';

  constructor(private http:HttpClient) { }

  validateAndGetRole(user: User): Observable<Role>{
    console.log(user.user_name);
    console.log(user.password);

    return this.http.post<Role>(this._url, user);
  }
}
