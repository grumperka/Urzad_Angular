import { TestBed } from '@angular/core/testing';

import { PowodyRozwoduServiceService } from './powody-rozwodu-service.service';

describe('PowodyRozwoduServiceService', () => {
  let service: PowodyRozwoduServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowodyRozwoduServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
