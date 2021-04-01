import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabSectionComponent } from './product-tab-section.component';

describe('ProductTabSectionComponent', () => {
  let component: ProductTabSectionComponent;
  let fixture: ComponentFixture<ProductTabSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTabSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTabSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
