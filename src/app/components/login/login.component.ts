import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title:string= "Service Ticket Resolution System"
  constructor() { }

  ngOnInit() {
  }

  validate(UserName:string, Password:string){
    alert(UserName);
    alert(Password);
    
  }

}
