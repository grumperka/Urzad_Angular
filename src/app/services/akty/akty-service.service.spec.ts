import { TestBed } from '@angular/core/testing';

import { AktyServiceService } from './akty-service.service';

describe('AktyServiceService', () => {
  let service: AktyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AktyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
