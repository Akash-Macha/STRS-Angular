import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ServiceEngineerComponent } from './components/service-engineer/service-engineer.component';
import { ShowAllTicketsComponent } from './components/user/show-all-tickets/show-all-tickets.component';
import { RaiseTicketComponent } from './components/user/raise-ticket/raise-ticket.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path:'', redirectTo:'/login', pathMatch: 'full'},
  { path:'login', component: LoginComponent},
  { path:'logout', component: LogoutComponent},
  
  {
    path: 'user', 
    component: UserComponent,

    // we've 2 Child Routes: 1. ShowAllTickets, 2. RaiseTicket
    children: [
      { path:'showAllTickets', component: ShowAllTicketsComponent },
      { path:'raiseTicket', component: RaiseTicketComponent },
    ]

  },
  { 
    path: 'serviceEngineer', 
    component: ServiceEngineerComponent 
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [
  LoginComponent,
  UserComponent,
  ServiceEngineerComponent,
  ShowAllTicketsComponent,
  RaiseTicketComponent,
  HomeComponent,
  PageNotFoundComponent
]