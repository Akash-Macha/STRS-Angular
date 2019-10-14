import { Injectable } from '@angular/core';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
// import { of } from 'rxjs';

 
@Injectable()
export class AuthService{
    private _url: string = '';

    private isLoggedIn: boolean;
    private userName: string;

    constructor(){
        this.isLoggedIn = false;
    }

    /**
     * return true, if roleName exists in the localSession
     * else false
     */
    loggedIn(){
        console.log(" Hit in loggedIn() auth.service.ts");
        
        return !!localStorage.getItem('roleName');
    }

}