import { TestBed } from '@angular/core/testing';

import { UrzedyServiceService } from './urzedy-service.service';

describe('UrzedyServiceService', () => {
  let service: UrzedyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrzedyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
