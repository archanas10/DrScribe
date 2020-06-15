
import { Injectable } from '@angular/core';
import { Patient } from './../patients/patient-model';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class PatientService {


  patients: Observable<any[]>;
  selectedPatient: any;
  approve= false;
  reject= false;


  constructor(private db: AngularFireDatabase, public afs: AngularFirestore) {

    this.patients = this.afs.collection('patients').valueChanges();

  }

  ngOnInit() {
    this.approve= false;
    this.reject= false;
  }

  getPatients(){
    return this.patients;
  }

  setSelectedPatient(val: any){
    this.selectedPatient = JSON.stringify(val);
    console.log("from service" + this.selectedPatient);

  }
  getSelectedPatient() {
    return this.selectedPatient;
  }
  onApprove() {
    console.log("Approve clicked");
    this.reject = false;
    return this.approve = true;
  }
  onReject() {
    console.log("Reject clicked");
    this.approve = false;
    return this.reject = true;
  }


}
