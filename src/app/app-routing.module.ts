import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailerComponent } from './emailer/emailer.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: '', component: EmailerComponent}, 
  {path: 'emailer', component: EmailerComponent},
  {path: 'landing', component: LandingComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
