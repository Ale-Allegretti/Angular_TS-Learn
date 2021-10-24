import { TestBed } from '@angular/core/testing';

import { WSRequestService } from './wsrequest.service';

describe('WSRequestService', () => {
  let service: WSRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WSRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
