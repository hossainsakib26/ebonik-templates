import {Component, OnInit} from '@angular/core';
import {OwlOptions, SlidesOutputData} from 'ngx-owl-carousel-o';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fashion-carousel',
  templateUrl: './fashion-carousel.component.html',
  styleUrls: ['./fashion-carousel.component.scss'],
})
export class FashionCarouselComponent implements OnInit {
  // @ts-ignore
  activeSlides: SlidesOutputData;

  slidesStore: any[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  public isAnimationActive = false;
  constructor(ngbConfig: NgbConfig) {
    this.isAnimationActive = ngbConfig.animation = true;
  }

  ngOnInit(): void {
  }

  getPassedData(data: SlidesOutputData): void {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }


}
