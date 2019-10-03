import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ServiceEngineerComponent } from './components/service-engineer/service-engineer.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';
import { ShowAllTicketsComponent } from './components/user/show-all-tickets/show-all-tickets.component';
import { RaiseTicketComponent } from './components/user/raise-ticket/raise-ticket.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

import { ShowAllTicketsSEComponent } from './components/service-engineer/show-all-tickets-se/show-all-tickets-se.component';
import { AverageTimeTakenPerEngineerComponent } from './components/service-engineer/average-time-taken-per-engineer/average-time-taken-per-engineer.component';
import { AverageTimeTakenPerSeverityComponent } from './components/service-engineer/average-time-taken-per-severity/average-time-taken-per-severity.component';
import { AgingOfOpenTicketsComponent } from './components/service-engineer/aging-of-open-tickets/aging-of-open-tickets.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ServiceEngineerComponent,
    LogoutComponent,
    ShowAllTicketsComponent,
    RaiseTicketComponent,
    PageNotFoundComponent,
    HomeComponent,

    ShowAllTicketsSEComponent,
    AverageTimeTakenPerEngineerComponent,
    AverageTimeTakenPerSeverityComponent,
    AgingOfOpenTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

