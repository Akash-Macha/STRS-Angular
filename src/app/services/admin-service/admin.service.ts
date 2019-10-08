import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { Department } from 'src/app/models/Department';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/Role';
import { Status } from 'src/app/models/Status';
import { Priority } from 'src/app/models/Priority';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    private _url: string = 'http://localhost:8181';

    constructor(
        private _http: HttpClient
    ) { }

    getListOfUsers(): Observable<User[]>{
        // URL: admin/getAllUsers
        // HttpType: GET
        return this._http.get<User[]>( this._url + '/admin/getAllUsers' );
    }

    getListOfRoles(): Observable<Role[]>{
        // URL: role/getAllRoles
        // HttpType: GET
        return this._http.get<Role[]>( this._url + '/role/getAllRoles' );
    }

    getListOfDepartments(): Observable<Department[]>{
        // URL: user/getDepartments
        // HttpType: GET
        return this._http.get<Department[]>( this._url + '/user/getDepartments' );
    }
    getListOfStatuses(): Observable<Status[]>{
        // URL: status/getAllStatuses
        // HttpType: GET
        return this._http.get<Status[]>( this._url + '/status/getAllStatuses' );
    }

    getListOfPriorities(): Observable<Priority[]>{
        // URL: priority/getAllPriorities
        // HttpType: GET
        return this._http.get<Priority[]>( this._url + '/priority/getAllPriorities' );
    }
}
