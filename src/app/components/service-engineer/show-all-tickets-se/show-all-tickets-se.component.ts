import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Priority } from 'src/app/models/Priority';
import { Ticket } from 'src/app/models/Ticket';
import { ServiceEngineerService } from 'src/app/services/service-engineer-service/service-engineer.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-show-all-tickets-se',
    templateUrl: './show-all-tickets-se.component.html',
    styleUrls: ['./show-all-tickets-se.component.css']
})
export class ShowAllTicketsSEComponent implements OnInit {
    private readonly unsubscribe$ = new Subject<void>();
    
    public tickets: Ticket[];
    public ticketId: number;
    public newPriorityValue: string;
    
    public listOfPriorities: Priority[] = [];

    constructor(private _serviceEngineerService: ServiceEngineerService,
        private _router: Router) { }

    ngOnInit() {
        this._serviceEngineerService.getAllTickets().subscribe(
            (data) => {
                this.tickets = data;
            }
        );

        this._serviceEngineerService.getListOfPriorities().subscribe(
            data => this.listOfPriorities = data,
            error => console.log(error)
        );
    }

    ngOnDestroy(): void {
        
        // motivation: https://blog.angularindepth.com/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0
        this.unsubscribe$.next();
        this.unsubscribe$.complete();

        console.log("\n ngOnDestroy in SHOW-ALL-TICKETS Component!");
    }

    closeTicket(ticketId: string): void {
        console.log("new Priority value in updateTicketPriorty funtion = " + ticketId);

        /*
        1. navigate to /serviceEngineer/closeTicket/:ticketId
        2. make respective REST call and close the ticket
        3. navigate to /serviceEngineer/showAllTicketsSE to display the updated Tickets!
        */

        // Step: 1
        // URL: /serviceEngineer/closeTicket/:ticketId
        console.log("CHECK--CHECK = " + ticketId);
        
        this._router.navigate(['/serviceEngineer/closeTicket', ticketId]);
    }

    filterByCurrentPriority( currentPriority: string ): Priority[]{
        console.log("-------------->\n " + JSON.stringify( this.listOfPriorities) );
    
        // return this.listOfPriorities.filter( x => x.value != currentPriority );

        var filteredListOfPriorities:Priority[] = [];

        // https://stackoverflow.com/a/44689516 ; comment: results?.length > 0
        for( let i =0 ; i < this.listOfPriorities.length ; ++i)
            if(this.listOfPriorities[i].value !== currentPriority)
                filteredListOfPriorities.push( this.listOfPriorities[i] );
        
        return filteredListOfPriorities;
    }

}
