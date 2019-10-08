import { Component, OnInit } from '@angular/core';
import { Priority } from 'src/app/models/Priority';
import { AdminService } from 'src/app/services/admin-service/admin.service';

@Component({
    selector: 'app-show-ticket-priorities',
    templateUrl: './show-ticket-priorities.component.html',
    styleUrls: ['./show-ticket-priorities.component.css']
})
export class ShowTicketPrioritiesComponent implements OnInit {

    public listOfPriorities: Priority[];

    constructor(
        private _adminService: AdminService
    ) { }

    ngOnInit() {
        this._adminService.getListOfPriorities().subscribe(
            data => this.listOfPriorities = data,
            error => console.log('ERROR in Show-Priorities-Admin ' + error)
        )
    }

}
