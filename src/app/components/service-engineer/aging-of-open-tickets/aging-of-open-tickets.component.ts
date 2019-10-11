import { Component, OnInit } from '@angular/core';
import { ServiceEngineerService } from 'src/app/services/service-engineer-service/service-engineer.service';
import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'app-aging-of-open-tickets',
  templateUrl: './aging-of-open-tickets.component.html',
  styleUrls: ['./aging-of-open-tickets.component.css']
})
export class AgingOfOpenTicketsComponent implements OnInit {

  public Statistics: any; //[Ticket, number]; // [, age: number]
  
  private _url:string= 'http://localhost:8181';

  constructor(private _serviceEngineerService:ServiceEngineerService) { }

  ngOnInit() {
    this._serviceEngineerService.getAgingOfOpenTicket().subscribe(
      (data) => {
        this.Statistics = data;
      }
    );
  }

}
