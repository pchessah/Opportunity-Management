import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NewOpportunityComponent } from './new-opportunity/new-opportunity.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"log-in", component: LogInComponent},
  {path: "sign-up", component: SignUpComponent},
  {path: "home", component: HomeComponent},
  {path: "new-opportunity", component: NewOpportunityComponent},
  { path: '',   redirectTo: '/log-in', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
