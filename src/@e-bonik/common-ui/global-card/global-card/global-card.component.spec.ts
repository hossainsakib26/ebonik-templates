import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCardComponent } from './global-card.component';

describe('GlobarCardComponent', () => {
  let component: GlobalCardComponent;
  let fixture: ComponentFixture<GlobalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
