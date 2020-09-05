
import { Injectable } from '@angular/core';
import { Patient } from './../patients/patient-model';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { pid } from 'process';


@Injectable({ providedIn: 'root' })

export class PatientService {

  patientsRef: AngularFirestoreCollection<Patient>;
  patients: Observable<Patient[]>;
  selectedPatient: any;
  approve= false;
  reject = false;
  PatientId: String;


  constructor(private db: AngularFireDatabase, public afs: AngularFirestore) {
    this.patientsRef = this.afs.collection('patients');
    this.patients = this.patientsRef.valueChanges({idField: 'PatientId'});

  }
  ngOnInit() {
    this.approve= false;
    this.reject= false;
  }

  getPatients(){
    return this.patients;
  }

  setSelectedPatient(val: any, pid: string){
    this.selectedPatient = JSON.stringify(val);
    this.PatientId = pid;
    console.log("from service" + this.selectedPatient + "pid: " + pid);

  }
  getSelectedPatient() {
    return this.selectedPatient;
  }
  onApprove() {
    console.log("Approve clicked");
    this.reject = false;
    this.patientsRef.doc('pid').set({
      ApprOrNAppr: true,
      VisOrNVis: false
    })
    console.log(this.selectedPatient);
    return this.approve = true;

  }
  onReject() {
    console.log("Reject clicked");
    this.approve = false;
    return this.reject = true;
  }


}
