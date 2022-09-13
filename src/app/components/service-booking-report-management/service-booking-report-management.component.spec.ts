import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookingReportManagementComponent } from './service-booking-report-management.component';

describe('ServiceBookingReportManagementComponent', () => {
  let component: ServiceBookingReportManagementComponent;
  let fixture: ComponentFixture<ServiceBookingReportManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBookingReportManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBookingReportManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
