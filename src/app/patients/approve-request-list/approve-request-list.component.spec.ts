import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRequestListComponent } from './approve-request-list.component';

describe('ApproveRequestListComponent', () => {
  let component: ApproveRequestListComponent;
  let fixture: ComponentFixture<ApproveRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
