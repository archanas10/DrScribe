import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { ApproveRequestListComponent } from './patients/approve-request-list/approve-request-list.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';
import { PatientRecordComponent } from './patients/patient-record/patient-record.component';
import { HomeComponent } from './home/home.component';
import { AppointmentCalenderComponent } from './patients/appointment-calender/appointment-calender.component';
import { EventComponent } from './patients/event/event.component';


const routes: Routes = [
  { path: '', redirectTo: 'authentication/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'approval-request', component: ApproveRequestListComponent},
  { path: 'patient-details', component: PatientDetailsComponent},
  { path: 'patient-record', component: PatientRecordComponent},
  { path: 'appointment-calender', component: AppointmentCalenderComponent },
  { path: 'event', component: EventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
