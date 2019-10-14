import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { LoginService } from '../../services/login-service/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    title: string = "Service Ticket Resolution System";
    role: Role = new Role();
    @Output() dataToEmit = new EventEmitter<Role>();
    user: User = new User();

    public invalidUser: boolean = false;

    constructor(
        private _loginService: LoginService,
        private _activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        // console.log("localStorage = " + localStorage.getItem('roleName'));

        /**
         * if he/she tries to visit /login after loggin in
         * Check the roleName of the Logged In User
         * navigate him/her to their respective page!
         */
        if (localStorage.getItem('roleName') !== null) {
            let roleName: string = localStorage.getItem('roleName');
            if (roleName === 'End User'){
                this.router.navigate(['/user']);
            }else if (roleName === 'Service Engineer') {
                this.router.navigate(['/serviceEngineer']);
            } else if (roleName === 'Admin') {
                this.router.navigate(['/admin']);
            }
        }

        // accetp url parameter "invalidUser" to display "Invalid"
        this._activatedRoute.paramMap.subscribe((params: ParamMap) => {

            let parameterInvalidUser = params.get('invalidUser');
            if (parameterInvalidUser === 'true')
                this.invalidUser = true;
            else
                this.invalidUser = false;
        });

    }

    validate() {

        this._loginService.validateAndGetRole(this.user).subscribe(
            (data) => {
                if (data.name === 'End User') {
                    // Route to user's componenet
                    this.router.navigate(['/user/showAllTickets']);
                } else if (data.name === 'Service Engineer') {
                    this.router.navigate(['/serviceEngineer/showAllTicketsSE']);
                }
                else if (data.name === 'Admin') {
                    this.router.navigate(['/admin/showUsers']);
                }
                else {
                    // Wrong Credentials
                    // navigate to "login page" with optional parameters and 'display' "Invalid Credentials"
                    this.router.navigate(['/login', { invalidUser: 'true' }]);
                    return;
                }

                // emit the role object so that LoginComponent
                // can be displayed accordingly !
                this.dataToEmit.emit(data);

                // set the userName into localStorage
                if (window.localStorage) {
                    let user_name: string = this.user.user_name;
                    let roleName: string = data.name;

                    // setting up "user_name" & "roleName" in the localStorage!
                    localStorage.setItem("user_name", user_name);
                    localStorage.setItem("roleName", roleName);
                    // console.log('--> ' + localStorage.getItem('user_name'));
                }
            },
            (error) => {
                console.error('Error! ', error);
                this.router.navigate(['/login', { invalidUser: 'true' }]);
            }
        );
    }
}
