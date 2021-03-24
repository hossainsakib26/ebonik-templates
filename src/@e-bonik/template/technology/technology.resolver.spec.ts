import { TestBed } from '@angular/core/testing';

import { TechnologyResolver } from './technology.resolver';

describe('TechnologyResolver', () => {
  let resolver: TechnologyResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TechnologyResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
