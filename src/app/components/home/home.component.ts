import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/Role';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public role:Role= undefined;

  getRoleFromLogin(roleFromChild:Role){
    this.role = roleFromChild;
  }

  getRole(){
    return this.role;
  }
}
