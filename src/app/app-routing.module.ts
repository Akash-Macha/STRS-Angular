import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ServiceEngineerComponent } from './components/service-engineer/service-engineer.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'serviceEngineer', component: ServiceEngineerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [
  LoginComponent,
  UserComponent,
  ServiceEngineerComponent
]