import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/Department';
import { Priority } from 'src/app/models/Priority';
import { Ticket } from 'src/app/models/Ticket';

@Injectable({
    providedIn: 'root'
})
export class ServiceEngineerService {

    private _url: string = 'http://localhost:8181';

    constructor(private _http: HttpClient) { }

    getAgingOfOpenTicket(): Observable<[Ticket, number]> {
        let user_name: string = localStorage.getItem('user_name');

        return this._http.get<[Ticket, number]>(this._url + '/serviceEngineer/getAgingOfOpenTicket/' + user_name);
    }

    getStatsOfEngineers(): Observable<any> {
        return this._http.get<any>(this._url + '/serviceEngineer' + '/getStatsOfEngineers');
    }

    getStatsOfSeverity(): Observable<any> {
        return this._http.get<any>(this._url + '/serviceEngineer/getStatsOfSeverity');
    }

    getAllTickets(): Observable<Ticket[]> {
        let user_name: string = localStorage.getItem('user_name');

        return this._http.get<Ticket[]>(this._url + '/ticket/getAll/' + user_name);
    }

    getListOfDepartments() {
        // URL: GET: user/getDepartments
        return this._http.get<Department[]>(this._url + '/user/getDepartments');
        // throw new Error("Method not implemented.");
    }

    getListOfPriorities(): Observable<Priority[]> {
        // url : priority/getAllPriorities
        return this._http.get<Priority[]>(this._url + '/user/getPriorities');
    }

    closeTicket(ticketId: string) {
        // console.log("Before making rest call, ticketId = " + ticketId);
        return this._http.delete(this._url + '/ticket/close/' + ticketId);
    }

    updateTicketPriority(updateTicketValues: any){

        return this._http.put( this._url + '/serviceEngineer/updateTicketPriority', updateTicketValues);
    }
}
