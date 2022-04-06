import { TestBed } from '@angular/core/testing';

import { WojewodztwaServiceService } from './wojewodztwa-service.service';

describe('WojewodztwaServiceService', () => {
  let service: WojewodztwaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WojewodztwaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
