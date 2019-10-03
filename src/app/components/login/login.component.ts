import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../services/login-service/login.service';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { ActivatedRoute, Router, OutletContext } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title:string= "Service Ticket Resolution System";

  role = new Role();

  @Output() dataToEmit = new EventEmitter<Role>();

  user = new User();

  constructor(private _loginService:LoginService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
  }

  validate(){
 
    this._loginService.validateAndGetRole(this.user)
    .subscribe(
      (data) => {
        // emit the role object so that LoginComponent
        // can be displayed accordingly !
        this.dataToEmit.emit(data);

        // set the userName into localStorage
        if(window.sessionStorage){
          let user_name:string = this.user.user_name;
          let roleName:string = data.name;

          sessionStorage.setItem("user_name", user_name);
          sessionStorage.setItem("roleName", roleName);
          console.log('--> ' + sessionStorage.getItem('user_name'));
        }

        // Route to user's componenet
        this.router.navigate(['/user']);
     },
      (error) => {
        console.error('Error! ', error);
      }
      );
  }
}
