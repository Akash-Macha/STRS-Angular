import { Component, OnInit } from '@angular/core';
import { Statistic } from '../../../models/Statistic';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aging-of-open-tickets',
  templateUrl: './aging-of-open-tickets.component.html',
  styleUrls: ['./aging-of-open-tickets.component.css']
})
export class AgingOfOpenTicketsComponent implements OnInit {

  public Statistics:any; //Statistic[];
  
  private _url:string= 'http://localhost:8181';

  constructor(private _http:HttpClient) { }

  ngOnInit() {

    let user_name:string = sessionStorage.getItem('user_name');
    // make rest call and 
    this._http.get(this._url + '/serviceEngineer/getAgingOfOpenTicket/' + user_name).subscribe(
      (data) => {
        this.Statistics = data;
      }
    )
  }
}
