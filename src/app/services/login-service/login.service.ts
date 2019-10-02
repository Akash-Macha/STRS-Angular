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

  private _url:string= 'http://localhost:8181/';

  constructor(private http:HttpClient) { }

  validateAndGetRole(user_name:string, password:string): Observable<Role>{

    alert('in service: username = ' + user_name);
    alert('in service: password = ' + password);

    // var response = new Role();
    // response.name = "Admin";
    // return new Observable<Role>(); // of(response);  //

    var body_user = new User();
    body_user.user_name = user_name;
    body_user.password = password;

    return this.http.post<Role>(this._url + '/Validate', body_user);
  }
}
