import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartShortViewComponent } from './cart-short-view.component';

describe('CartShortViewComponent', () => {
  let component: CartShortViewComponent;
  let fixture: ComponentFixture<CartShortViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartShortViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartShortViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
