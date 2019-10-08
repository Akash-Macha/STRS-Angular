import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service/admin.service';
import { Role } from 'src/app/models/Role';

@Component({
    selector: 'app-show-roles',
    templateUrl: './show-roles.component.html',
    styleUrls: ['./show-roles.component.css']
})
export class ShowRolesComponent implements OnInit {

    public listOfRoles:Role[];

    constructor(
        private _adminService: AdminService
    ) { }

    ngOnInit() {
        this._adminService.getListOfRoles().subscribe(
            data => this.listOfRoles = data,
            error => console.log('ERROR in Show-Roles-Admin ' + error)
        )
        
    }

}
