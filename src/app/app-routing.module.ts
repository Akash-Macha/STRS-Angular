import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './components/admin/add-department/add-department.component';
import { AddRoleComponent } from './components/admin/add-role/add-role.component';
import { AddServiceEngineerComponent } from './components/admin/add-service-engineer/add-service-engineer.component';
import { AddStatusComponent } from './components/admin/add-status/add-status.component';
import { AddTicketPriorityComponent } from './components/admin/add-ticket-priority/add-ticket-priority.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { AdminComponent } from './components/admin/admin.component';
import { ShowDepartmentsComponent } from './components/admin/show-departments/show-departments.component';
import { ShowRolesComponent } from './components/admin/show-roles/show-roles.component';
import { ShowStatusesComponent } from './components/admin/show-statuses/show-statuses.component';
import { ShowTicketPrioritiesComponent } from './components/admin/show-ticket-priorities/show-ticket-priorities.component';
import { ShowUsersComponent } from './components/admin/show-users/show-users.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AgingOfOpenTicketsComponent } from './components/service-engineer/aging-of-open-tickets/aging-of-open-tickets.component';
import { AverageTimeTakenPerEngineerComponent } from './components/service-engineer/average-time-taken-per-engineer/average-time-taken-per-engineer.component';
import { AverageTimeTakenPerSeverityComponent } from './components/service-engineer/average-time-taken-per-severity/average-time-taken-per-severity.component';
import { CloseTicketComponent } from './components/service-engineer/close-ticket/close-ticket.component';
import { ServiceEngineerComponent } from './components/service-engineer/service-engineer.component';
import { ShowAllTicketsSEComponent } from './components/service-engineer/show-all-tickets-se/show-all-tickets-se.component';
import { UpdateTicketPriorityComponent } from './components/service-engineer/update-ticket-priority/update-ticket-priority.component';
import { RaiseTicketComponent } from './components/user/raise-ticket/raise-ticket.component';
import { ShowAllTicketsComponent } from './components/user/show-all-tickets/show-all-tickets.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },

    {
        path: 'user', component: UserComponent,

        // we've 2 Child Routes: 1. ShowAllTickets, 2. RaiseTicket
        children: [
            { path: 'showAllTickets', component: ShowAllTicketsComponent },
            { path: 'raiseTicket', component: RaiseTicketComponent },
        ]
    },
    {
        path: 'serviceEngineer', component: ServiceEngineerComponent,

        children: [
            { path: 'agingOfOpenTickets', component: AgingOfOpenTicketsComponent },
            { path: 'averageTimeTakenPerEngineer', component: AverageTimeTakenPerEngineerComponent },
            { path: 'averageTimeTakenPerSeverity', component: AverageTimeTakenPerSeverityComponent },
            { path: 'showAllTicketsSE', component: ShowAllTicketsSEComponent },

            // HttpType: PUT
            { path: 'updateTicketPriority/:ticketId/:newPriorityValue', component: UpdateTicketPriorityComponent },

            // HttpType: DELETE
            { path: 'closeTicket/:ticketId', component: CloseTicketComponent }
        ]
    },

    { 
        path: 'admin', component: AdminComponent,

        children: [
            { path: 'showUsers', component: ShowUsersComponent },
            { path: 'showDepartments', component: ShowDepartmentsComponent },
            { path: 'showRoles', component: ShowRolesComponent },
            { path: 'showStatuses', component: ShowStatusesComponent },
            { path: 'showTicketPriorities', component: ShowTicketPrioritiesComponent },

            // HttpType: POST
            { path: 'addDepartment', component: AddDepartmentComponent },
            { path: 'addRole', component: AddRoleComponent },
            { path: 'addServiceEngineer', component: AddServiceEngineerComponent },
            { path: 'addStatus', component: AddStatusComponent },
            { path: 'addTicketPriority', component: AddTicketPriorityComponent },
            { path: 'addUser', component: AddUserComponent },
        ]
    },

    { path: 'pageNotFound', component: PageNotFoundComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
    HomeComponent,
    LoginComponent,
    LogoutComponent,

    // User Components
    UserComponent,
    ShowAllTicketsComponent,
    RaiseTicketComponent,

    // ServiceEngineer Components
    ServiceEngineerComponent,
    AgingOfOpenTicketsComponent,
    AverageTimeTakenPerEngineerComponent,
    AverageTimeTakenPerSeverityComponent,
    ShowAllTicketsSEComponent,
    UpdateTicketPriorityComponent,
    CloseTicketComponent,

    // Admin Components
    AdminComponent,
    ShowUsersComponent,
    ShowDepartmentsComponent,
    ShowRolesComponent,
    ShowStatusesComponent,
    ShowTicketPrioritiesComponent,

    AddDepartmentComponent,
    AddRoleComponent,
    AddServiceEngineerComponent,
    AddStatusComponent,
    AddTicketPriorityComponent,
    AddUserComponent,

    PageNotFoundComponent,
]