import { Component, OnInit } from '@angular/core';

import { Ticket } from '../../../models/Ticket';
import { UserService } from 'src/app/services/user-service/user.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-show-all-tickets',
  templateUrl: './show-all-tickets.component.html',
  styleUrls: ['./show-all-tickets.component.css']
})
export class ShowAllTicketsComponent implements OnInit {

  public tickets:Ticket[];

  constructor(private _userService:UserService) { }

  ngOnInit() {

    // make a rest call and get all the tickets
    // url:  ticket/getAll/{user_name}
    this._userService.getAllTickets().subscribe(
      (data) => {
        this.tickets = data;
      },
    );
  }
}
