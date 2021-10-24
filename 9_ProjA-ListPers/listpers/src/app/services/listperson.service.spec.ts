import { TestBed } from '@angular/core/testing';

import { ListpersonService } from './listperson.service';

describe('ListpersonService', () => {
  let service: ListpersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListpersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
