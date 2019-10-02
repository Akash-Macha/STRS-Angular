import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service/login.service';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title:string= "Service Ticket Resolution System";
  role:Role;
  user:User;

  constructor(private _loginService:LoginService) { }

  ngOnInit() {
  }

  validate(UserName:string, Password:string){
    alert(UserName);
    alert(Password);

    
    this._loginService.validateAndGetRole(UserName, Password).subscribe( 
      data => 
      { 
        this.role = data;
        console.log('inside loginserivce, this.role.name = ' + this.role.name) 
      });

      if(this.role.name === 'Admin'){

      }else if(this.role.name === 'User'){

      }else{
        // UnAuthorized User

      }
  }
}
