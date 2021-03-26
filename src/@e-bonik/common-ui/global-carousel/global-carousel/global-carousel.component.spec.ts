import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCarouselComponent } from './global-carousel.component';

describe('GlobalCarouselComponent', () => {
  let component: GlobalCarouselComponent;
  let fixture: ComponentFixture<GlobalCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
