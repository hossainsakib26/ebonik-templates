import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorPolicyComponent } from './author-policy.component';

describe('AuthorPolicyComponent', () => {
  let component: AuthorPolicyComponent;
  let fixture: ComponentFixture<AuthorPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
