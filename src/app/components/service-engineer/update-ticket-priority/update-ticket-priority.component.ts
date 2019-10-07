import { Component, OnInit } from '@angular/core';
import { ServiceEngineerService } from 'src/app/services/service-engineer-service/service-engineer.service';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-update-ticket-priority',
    templateUrl: './update-ticket-priority.component.html',
    styleUrls: ['./update-ticket-priority.component.css']
})
export class UpdateTicketPriorityComponent implements OnInit {

    private _ticketId: string;
    private _newPriorityvalue: string;

    constructor(
        private _serviceEngineerService: ServiceEngineerService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {

        // get the routing paramrters: ticketId & newPriority value
        this._activatedRoute.paramMap.subscribe(
            param => {
                this._ticketId = param.get('ticketId');
                this._newPriorityvalue = param.get('newPriorityValue');
            }
        )
        
        // URL : serviceEngineer/updateTicketPriority
        // ACCEPTS: [ TicketId: String, newPriorityValue: String ]
        this._serviceEngineerService.updateTicketPriority( [ this._ticketId, this._newPriorityvalue ] ).subscribe(
            data => {
                this._router.navigate(['/serviceEngineer/showAllTicketsSE']);
            },
            error => console.log("ERROR in Update-Ticket-Prioroity = " + error)
        );
    }

}
