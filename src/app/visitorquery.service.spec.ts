import { TestBed } from '@angular/core/testing';

import { VisitorqueryService } from './visitorquery.service';

describe('VisitorqueryService', () => {
  let service: VisitorqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
