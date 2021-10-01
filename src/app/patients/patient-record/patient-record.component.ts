import { Component, OnInit } from '@angular/core';
import { ApproveRequestListComponent } from '../approve-request-list/approve-request-list.component';
import { PatientService } from '../patient-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.css']
})
export class PatientRecordComponent implements OnInit {

  selectedPatient: any;
  SPparsedJson: any;


  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.selectedPatient = this.patientService.getSelectedPatient();
    this.SPparsedJson = JSON.parse(this.selectedPatient);
    console.log("With Parsed JSON :" , this.SPparsedJson);
  }
  onClickApprove(event: Event) {
    this.router.navigate(['./event']);
    console.log("record approved clicked");
    this.patientService.onApprove(this.SPparsedJson);

  }
  onClickReject(event: Event) {
    this.router.navigate(['./event']);
    console.log("record rejected clicked");
    this.patientService.onReject(this.SPparsedJson);
  }

}
