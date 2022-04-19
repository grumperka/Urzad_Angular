import { TestBed } from '@angular/core/testing';

import { ObywateleServiceService } from './obywatele-service.service';

describe('ObywateleServiceService', () => {
  let service: ObywateleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObywateleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
