import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AdminService } from 'src/app/services/admin-service/admin.service';

@Component({
    selector: 'app-show-users',
    templateUrl: './show-users.component.html',
    styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

    public listOfUsers: User[];

    constructor(
        private _adminService: AdminService
    ) { }

    ngOnInit() {
        this._adminService.getListOfUsers().subscribe(
            data => {
                this.listOfUsers = data;
            },
            error => console.log("ERROR in Show-User-Admin" + error)
        );
    }

}
