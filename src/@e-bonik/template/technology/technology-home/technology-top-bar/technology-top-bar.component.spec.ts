import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTopBarComponent } from './technology-top-bar.component';

describe('TechnologyTopBarComponent', () => {
  let component: TechnologyTopBarComponent;
  let fixture: ComponentFixture<TechnologyTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyTopBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
