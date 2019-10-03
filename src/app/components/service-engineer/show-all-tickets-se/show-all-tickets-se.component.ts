import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/Ticket';
import { ServiceEngineerService } from 'src/app/services/service-engineer-service/service-engineer.service';

@Component({
  selector: 'app-show-all-tickets-se',
  templateUrl: './show-all-tickets-se.component.html',
  styleUrls: ['./show-all-tickets-se.component.css']
})
export class ShowAllTicketsSEComponent implements OnInit {

  public tickets:Ticket[];

  constructor(private _serviceEngineerService:ServiceEngineerService) { }

  ngOnInit() {
    this._serviceEngineerService.getAllTickets().subscribe(
      (data) => {
        this.tickets = data;
      }
    );
  }

}
