import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleImageCarouselComponent } from './single-image-carousel.component';

describe('SingleImageCarouselComponent', () => {
  let component: SingleImageCarouselComponent;
  let fixture: ComponentFixture<SingleImageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleImageCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
