
import { Injectable } from '@angular/core';
import { Patient } from './../patients/patient-model';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, combineChange } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { pid } from 'process';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BE } from 'src/environments/environment';

var BackendUrl = BE.apiUrl;
@Injectable({ providedIn: 'root' })

export class PatientService {

  patientsRef: AngularFirestoreCollection<Patient>;
  patients: Observable<Patient[]>;
  selectedPatient: any;
  isApproved= false;
  reject = false;
  PatientId: String;


  constructor(private db: AngularFireDatabase, public afs: AngularFirestore,  private http: HttpClient) {
    this.patientsRef = this.afs.collection('patients');
    this.patients = this.patientsRef.valueChanges({idField: 'PatientId'});

  }
  ngOnInit() {
    this.isApproved= false;
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
  onApprove(currentPatient: any) {
    console.log("Approve clicked");
    this.isApproved = true
    const approved= currentPatient
    approved.isAppointmentApproved = true
    const cpid = currentPatient.PatientId
    console.log(approved)
    this.http.post<{message: string ; ApprOrNAppr:boolean}>(BackendUrl+'/patient-record', approved).subscribe((response) => {
        console.log(response.message);
        this.selectedPatient.push(approved);
    })
    this.reject = false;
    this.patientsRef.doc(cpid).set({
      ...approved
    })
    console.log(this.selectedPatient);
    return this.isApproved;

  }
  onReject(currentPatient: any) {
    console.log("Reject clicked");
    this.isApproved = false;
    const approved= currentPatient
    approved.isAppointmentApproved = false
    const cpid = currentPatient.PatientId
    this.patientsRef.doc(cpid).set({
      ...approved
    })
    return this.isApproved;
  }


}
