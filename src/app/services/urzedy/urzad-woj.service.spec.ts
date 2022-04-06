import { TestBed } from '@angular/core/testing';

import { UrzadWojService } from './urzad-woj.service';

describe('UrzadWojService', () => {
  let service: UrzadWojService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrzadWojService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
