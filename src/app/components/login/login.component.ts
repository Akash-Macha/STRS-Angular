import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service/login.service';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title:string= "Service Ticket Resolution System";
  role = new Role();
  user = new User();

  constructor(private _loginService:LoginService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
  }

  getRole(){
    let role:Role;

    
  }
  validate(){
    console.log(this.user.user_name);
    console.log(this.user.password);
    
    this._loginService.validateAndGetRole(this.user)
    .subscribe(
      (data) => { 
        let role:Role = data;

        if(role.name === 'End User'){
          this.router.navigate(['user']);
        }


     },
      (error) => {console.error('Error! ', error) }
      );
  }
}
