import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionNavComponent } from './fashion-nav.component';

describe('FashionNavComponent', () => {
  let component: FashionNavComponent;
  let fixture: ComponentFixture<FashionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
