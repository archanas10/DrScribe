import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient-list.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  approved= false;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.approved = false;
    this.approved = this.statusTemplate();
  }

  statusTemplate() {
    if (this.patientService.onApprove() === true) {
      console.log("event approve")
      this.approved = true;
    } else if (this.patientService.onReject() === true) {
      console.log("event reject")
      this.approved = !this.approved;
    }
    return this.approved;
  }


}
