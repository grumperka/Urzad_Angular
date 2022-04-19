import { TestBed } from '@angular/core/testing';

import { UrzednicyServiceService } from './urzednicy-service.service';

describe('UrzednicyServiceService', () => {
  let service: UrzednicyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrzednicyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
