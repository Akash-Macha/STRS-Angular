import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-service-engineer',
    templateUrl: './service-engineer.component.html',
    styleUrls: ['./service-engineer.component.css']
})
export class ServiceEngineerComponent implements OnInit {

    public user_name: string = localStorage.getItem('user_name');

    constructor(private _router: Router) { }

    ngOnInit() {
        if (localStorage.getItem('user_name') === null){
            // pass optional parameters ! and show "Your are not logged in!"
            this._router.navigate(['/login']);
            return;
        }

        this._router.navigate(['/serviceEngineer/showAllTicketsSE']);
    }
}
