import { TestBed } from '@angular/core/testing';

import { FashionHomeResolver } from './fashion-home.resolver';

describe('FashionHomeResolver', () => {
  let resolver: FashionHomeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FashionHomeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
