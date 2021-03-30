import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyMenubarComponent } from './technology-menubar.component';

describe('TechnologyMenubarComponent', () => {
  let component: TechnologyMenubarComponent;
  let fixture: ComponentFixture<TechnologyMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyMenubarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
