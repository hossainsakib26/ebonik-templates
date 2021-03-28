import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionFooterComponent } from './fashion-footer.component';

describe('FashionFooterComponent', () => {
  let component: FashionFooterComponent;
  let fixture: ComponentFixture<FashionFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
