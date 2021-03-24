import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionTopbarComponent } from './fashion-topbar.component';

describe('FashionTopbarComponent', () => {
  let component: FashionTopbarComponent;
  let fixture: ComponentFixture<FashionTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
