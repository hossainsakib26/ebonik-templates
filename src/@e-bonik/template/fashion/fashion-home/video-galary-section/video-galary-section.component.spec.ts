import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGalarySectionComponent } from './video-galary-section.component';

describe('VideoGalarySectionComponent', () => {
  let component: VideoGalarySectionComponent;
  let fixture: ComponentFixture<VideoGalarySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoGalarySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGalarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
