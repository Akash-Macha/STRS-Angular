import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/models/Department';
import { Priority } from 'src/app/models/Priority';
import { Ticket } from 'src/app/models/Ticket';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {

    // To display
    public listOfDepartments:Department[];
    public listOfPriorities:Priority[];
  
    public minDate = new Date();
    // 2 years is the maximum requested date from the current Day!
    public maxDate = new Date(this.minDate.getFullYear() + 2 , this.minDate.getMonth() , this.minDate.getDay());
  
    // new Ticket to be submitted
    public newTicket: Ticket;// = new Ticket();
    
	constructor(private _userService:UserService,
		private route:ActivatedRoute, 
		private router:Router) { }

	ngOnInit() {
		this._userService.getListOfDepartments().subscribe(
		  (data) => this.listOfDepartments = data,
		  (error) => console.log(error)
		);
	
		this._userService.getListOfPriorities().subscribe(
		  data => this.listOfPriorities = data,
		  error => console.log(error)
		);
	
		// instantiating new Ticket
		this.newTicket = new Ticket();
	  }

	  onSubmit(){
		for(let i =0 ; i < this.listOfDepartments.length ; ++i){
			if(this.newTicket.category.name === this.listOfDepartments[i].name){
				this.newTicket.category = this.listOfDepartments[i];
				break;
			}
		}
	
		for(let i=0 ; i < this.listOfPriorities.length ; ++i){
			if(this.newTicket.priority.value === this.listOfPriorities[i].value){
				this.newTicket.priority = this.listOfPriorities[i];
			}
		}
		// setting up the requested user_name
		this.newTicket.requested_by.user_name = sessionStorage.getItem('user_name');

		
		console.log("sessionStorage.getItem('user_name'); = " + sessionStorage.getItem('user_name'));
		console.log("newTicket = " + JSON.stringify(this.newTicket));
		console.log("day = " + this.newTicket.requested_end_date);

		let responseStatus: string;
		this._userService.insertTicket(this.newTicket).subscribe(
			data => {
				console.log("data in _userService.insertTicket = ");
				console.log(data);
				responseStatus = data;
				console.log(responseStatus);
			},
			error => console.log("ERROR in _userService.insertTicket" + JSON.stringify(error))
		)

		this.router.navigate( ['../showAllTickets', {insertStatus: 'inserted'}], {relativeTo: this.route} );


		// this.router.navigateByUrl('../showAllTickets', {skipLocationChange: true}).then(()=>
		// this.router.navigate( ['', {insertStatus: 'inserted'}], {relativeTo: this.route}  )); 

		// this.router.navigateByUrl('/pageNotFound', { skipLocationChange: true });
		// this.router.navigate( ['../showAllTickets', {insertStatus: 'inserted'}], {relativeTo: this.route} );
		// location.reload();

		// this.router.navigate(['user/showAllTickets', {insertStatus: 'inserted'}], {
		// 	queryParams: {refresh: new Date().getTime()}
		//  });
	  }

	// Filtering out Saturdays and Sundays
	dateFilter = (date: Date) =>{
		const day = date.getDay();
		return day != 0 && day != 6;
	}

	// updating newTicket.requested_end_date onChange of the requested_end_date input field
	updateRequestedEndDate(change:string, event: any){
		this.newTicket.requested_end_date = event.value;
	}

}
