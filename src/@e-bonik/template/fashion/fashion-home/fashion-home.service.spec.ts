import { TestBed } from '@angular/core/testing';

import { FashionHomeService } from './fashion-home.service';

describe('FashionHomeService', () => {
  let service: FashionHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
