import { TestBed } from '@angular/core/testing';

import { ItaliaService } from './italia.service';

describe('ItaliaService', () => {
  let service: ItaliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItaliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
