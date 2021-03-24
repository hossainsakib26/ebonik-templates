import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionCarouselComponent } from './fashion-carousel.component';

describe('FashionCarouselComponent', () => {
  let component: FashionCarouselComponent;
  let fixture: ComponentFixture<FashionCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
