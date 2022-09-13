import { TestBed } from '@angular/core/testing';

import { ServiceBookingReportService } from './service-booking-report.service';

describe('ServiceBookingReportService', () => {
  let service: ServiceBookingReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBookingReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
