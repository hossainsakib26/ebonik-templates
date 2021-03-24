import { TestBed } from '@angular/core/testing';

import { FashionResolver } from './fashion.resolver';

describe('FashionResolver', () => {
  let resolver: FashionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FashionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
