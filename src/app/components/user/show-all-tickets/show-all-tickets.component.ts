import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { Ticket } from '../../../models/Ticket';


@Component({
  selector: 'app-show-all-tickets',
  templateUrl: './show-all-tickets.component.html',
  styleUrls: ['./show-all-tickets.component.css']
})
export class ShowAllTicketsComponent implements OnInit {

  public tickets:Ticket[];

  public insertStatus:string;

  // mySubscription: any;

  constructor(private _userService:UserService,
			private activatedRoute:ActivatedRoute, 
			private router:Router) {
        
      }

  fetchTickets(){
    this._userService.getAllTickets().subscribe(
      (data) => {
        this.tickets = data;
      },
    );
  }

  ngOnInit() {
    // console.log("\n\nIMPORTANT CALL ngOnInit() {\n\n");
    

    // make a rest call and get all the tickets
    // url:  ticket/getAll/{user_name}
    this.fetchTickets();

    // accetp url parameter to display "Successfully submitted the ticket status"
    this.activatedRoute.paramMap.subscribe( (params: ParamMap) => {
      console.log('params.get(\'insertStatus\') = ' + params.get('insertStatus') );
      this.insertStatus = params.get('insertStatus');
    } );


    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      const refresh = paramMap.get('refresh');
      if (refresh) {
        this.fetchTickets();
      }
    });

  }

}
