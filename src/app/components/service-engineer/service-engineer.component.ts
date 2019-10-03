import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-engineer',
  templateUrl: './service-engineer.component.html',
  styleUrls: ['./service-engineer.component.css']
})
export class ServiceEngineerComponent implements OnInit {

  public user_name:string = sessionStorage.getItem('user_name');
  
  constructor() { }

  ngOnInit() {
  }

}
