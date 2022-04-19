import { TestBed } from '@angular/core/testing';

import { KierownicyServiceService } from './kierownicy-service.service';

describe('KierownicyServiceService', () => {
  let service: KierownicyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KierownicyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
