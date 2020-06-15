import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient-list.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patients: any;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(patient => {
      this.patients = patient;
      console.log(patient);
    })
  }

}
