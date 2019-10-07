import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ServiceEngineerService } from 'src/app/services/service-engineer-service/service-engineer.service';

@Component({
    selector: 'app-close-ticket',
    templateUrl: './close-ticket.component.html',
    styleUrls: ['./close-ticket.component.css']
})
export class CloseTicketComponent implements
    OnInit,
    OnDestroy {

    private readonly unsubscribe$ = new Subject<void>();
    private _ticketId: string;


    constructor(
        private _route: ActivatedRoute,
        private _router: Router,

        private _serviceEngineerService: ServiceEngineerService
    ) { }

    ngOnInit() {

        // ParamMap Observable method of accessing URL parameters
        this._route.paramMap.subscribe(
            (params: ParamMap) => {
                this._ticketId = params.get('ticketId');
            }
        )

        console.log("IMPORTANT: \nIn CloseTicket, Ticket Id = " + this._ticketId);
        
        // 1. close ticket by making rest call
        // HttpType: DELETE
        this._serviceEngineerService.closeTicket(this._ticketId).subscribe(
            data => {
                // 2. redirect to showAllTickets component!
                this._router.navigate(['/serviceEngineer/showAllTicketsSE']);

                console.log('\nInside ngOnInit() Close-Ticket _http.delete subscribe !\n ticketId = ' + this._ticketId);
            }
        );

        console.log('In ngOnInit: OUTSIDE of _http.delete close-Ticket component\n ticketId = ' + this._ticketId);
    }

    ngOnDestroy(): void {
        
        // motivation: 
        // https://blog.angularindepth.com/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0
        this.unsubscribe$.next();
        this.unsubscribe$.complete();

        console.log("\n ngOnDestroy in CLOSE-TICKET Component!");
    }

    // getter setters for _ticketId
    get ticketId(): string {
        return this._ticketId;
    }

    set ticketId(ticketId: string) {
        this._ticketId = ticketId;
    }

}
