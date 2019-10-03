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
import { AgingOfOpenTicketsComponent } from './components/service-engineer/aging-of-open-tickets/aging-of-open-tickets.component';
import { AverageTimeTakenPerEngineerComponent } from './components/service-engineer/average-time-taken-per-engineer/average-time-taken-per-engineer.component';
import { AverageTimeTakenPerSeverityComponent } from './components/service-engineer/average-time-taken-per-severity/average-time-taken-per-severity.component';
import { ShowAllTicketsSEComponent } from './components/service-engineer/show-all-tickets-se/show-all-tickets-se.component';

const routes: Routes = [
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
    component: ServiceEngineerComponent,

    children: [
      { path: 'agingOfOpenTickets', component: AgingOfOpenTicketsComponent},
      { path: 'averageTimeTakenPerEngineer', component: AverageTimeTakenPerEngineerComponent},
      { path: 'averageTimeTakenPerSeverity', component: AverageTimeTakenPerSeverityComponent},
      { path: 'showAllTicketsSE', component: ShowAllTicketsSEComponent},
    ]
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

  AgingOfOpenTicketsComponent,
  AverageTimeTakenPerEngineerComponent,
  AverageTimeTakenPerSeverityComponent,
  ShowAllTicketsSEComponent,

  PageNotFoundComponent
]