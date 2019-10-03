import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user_name:string = 'User';

  constructor(private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('user_name') === undefined || 
    sessionStorage.getItem('user_name') === ''){

      // pass optional parameters ! and show "Your are not logged in!"
      this.router.navigate(['/login']);

    }
    this.user_name = sessionStorage.getItem('user_name');
  }
}
