import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailerComponent } from './emailer/emailer.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'emailer', component: EmailerComponent },
  { path: '', redirectTo: 'emailer', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
