import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient-list.service';
import { Patient } from '../patient-model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patients: any;
  PTM = true;

  constructor(private patientService: PatientService) {
   }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(patient => {
      this.patients = patient;
      console.log(patient);
    })
  }
  AVPTemplate() {
    this.PTM = !this.PTM;
  }
  PTMTemplate(){
    this.PTM = true;
  }


}
