import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionCategoryCarouselComponent } from './fashion-category-carousel.component';

describe('FashionCategoryCarouselComponent', () => {
  let component: FashionCategoryCarouselComponent;
  let fixture: ComponentFixture<FashionCategoryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionCategoryCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionCategoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
