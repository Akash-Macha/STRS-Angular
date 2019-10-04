import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {

  listOfDepartments:any;
  listOfPriorities:any;

  constructor(private _http:) { }

  ngOnInit() {

  }

}
