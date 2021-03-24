import { TestBed } from '@angular/core/testing';

import { TemplateResolver } from './template.resolver';

describe('TemplateResolver', () => {
  let resolver: TemplateResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TemplateResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
