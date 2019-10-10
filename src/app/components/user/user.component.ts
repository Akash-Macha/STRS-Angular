import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    public user_name: string = 'User';

    constructor(private router: Router) { }

    ngOnInit() {
        if (localStorage.getItem('user_name') === null){
            // pass optional parameters ! and show "Your are not logged in!"
            this.router.navigate(['/login']);
            return;
        }
        this.user_name = localStorage.getItem('user_name');
    }
}
