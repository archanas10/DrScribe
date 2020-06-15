import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient-list.service';


@Component({
  selector: 'app-approve-request-list',
  templateUrl: './approve-request-list.component.html',
  styleUrls: ['./approve-request-list.component.css'],
  providers: [ ]
})
export class ApproveRequestListComponent implements OnInit {
  patients: any;
  patientRecord: any;
  selectedPatient: any;

  constructor(private patientService: PatientService) {

  }

  ngOnInit(): void {

    this.patientService.getPatients().subscribe(patient => {
      this.patients = patient;
      console.log(patient);

    })
  }


  patientDetail(list) {

    this.selectedPatient = list;
    console.log(this.selectedPatient)
    this.patientService.setSelectedPatient(this.selectedPatient)

  }


}

