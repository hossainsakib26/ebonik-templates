import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastiveCollectionComponent } from './fastive-collection.component';

describe('FastiveCollectionComponent', () => {
  let component: FastiveCollectionComponent;
  let fixture: ComponentFixture<FastiveCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastiveCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastiveCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
