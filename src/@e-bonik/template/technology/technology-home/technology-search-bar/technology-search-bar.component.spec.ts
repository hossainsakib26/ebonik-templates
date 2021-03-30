import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologySearchBarComponent } from './technology-search-bar.component';

describe('TechnologySearchBarComponent', () => {
  let component: TechnologySearchBarComponent;
  let fixture: ComponentFixture<TechnologySearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologySearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologySearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
