import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AgingOfOpenTicketsComponent } from './components/service-engineer/aging-of-open-tickets/aging-of-open-tickets.component';
import { AverageTimeTakenPerEngineerComponent } from './components/service-engineer/average-time-taken-per-engineer/average-time-taken-per-engineer.component';
import { AverageTimeTakenPerSeverityComponent } from './components/service-engineer/average-time-taken-per-severity/average-time-taken-per-severity.component';
import { ServiceEngineerComponent } from './components/service-engineer/service-engineer.component';
import { ShowAllTicketsSEComponent } from './components/service-engineer/show-all-tickets-se/show-all-tickets-se.component';
import { RaiseTicketComponent } from './components/user/raise-ticket/raise-ticket.component';
import { ShowAllTicketsComponent } from './components/user/show-all-tickets/show-all-tickets.component';
import { UserComponent } from './components/user/user.component';




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
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,

    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

