import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { ApproveRequestListComponent } from './patients/approve-request-list/approve-request-list.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';
import { PatientRecordComponent } from './patients/patient-record/patient-record.component';
import { AppointmentCalenderComponent } from './patients/appointment-calender/appointment-calender.component';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import { RouterModule, Route } from '@angular/router';
import { EventComponent } from './patients/event/event.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    ApproveRequestListComponent,
    PatientDetailsComponent,
    PatientRecordComponent,
    AppointmentCalenderComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,


    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,

    MatInputModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
