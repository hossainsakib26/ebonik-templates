import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-galary-section',
  templateUrl: './video-galary-section.component.html',
  styleUrls: ['./video-galary-section.component.scss']
})
export class VideoGalarySectionComponent implements OnInit {

  public videos: any[] = [
    {videoUrl: 'https://www.youtube.com/embed/WnqvZ7eaOUA'},
    {videoUrl: 'https://www.youtube.com/embed/QvJ1huOiWIA'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
