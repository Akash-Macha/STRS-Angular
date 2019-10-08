import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/Department';
import { AdminService } from 'src/app/services/admin-service/admin.service';

@Component({
    selector: 'app-show-departments',
    templateUrl: './show-departments.component.html',
    styleUrls: ['./show-departments.component.css']
})
export class ShowDepartmentsComponent implements OnInit {

    public listOfDepartments: Department[];

    constructor(
        private _adminService: AdminService
    ) { }

    ngOnInit() {
        this._adminService.getListOfDepartments().subscribe(
            data => this.listOfDepartments = data,
            error => console.log('ERROR in Show-Roles-Department ' + error)
        )
    }

}
