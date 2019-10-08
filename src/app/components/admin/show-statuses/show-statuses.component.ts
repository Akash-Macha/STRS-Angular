import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/models/Status';
import { AdminService } from 'src/app/services/admin-service/admin.service';

@Component({
    selector: 'app-show-statuses',
    templateUrl: './show-statuses.component.html',
    styleUrls: ['./show-statuses.component.css']
})
export class ShowStatusesComponent implements OnInit {

    public listOfStatuses: Status[];

    constructor(
        private _adminService: AdminService
    ) { }

    ngOnInit() {
        this._adminService.getListOfStatuses().subscribe(
            data => this.listOfStatuses = data,
            error => console.log('ERROR in Show-Statuses-Admin ' + error)
        )
    }

}
