import {Component, OnInit} from '@angular/core';
import {OwlOptions, SlidesOutputData} from 'ngx-owl-carousel-o';
import {Image} from '../../../../models/fasion-model/image';

@Component({
  selector: 'app-fashion-category-carousel',
  templateUrl: './fashion-category-carousel.component.html',
  styleUrls: ['./fashion-category-carousel.component.scss']
})
export class FashionCategoryCarouselComponent implements OnInit {

  public images: Image[] = [
    {id: '1', imgSrc: 'assets/cat-carousel/cat-carousel1.jpg', width: 275, imgAlt: 'idk', title: 'exclusive'},
    {id: '2', imgSrc: 'assets/cat-carousel/cat-carousel2.jpg', width: 275, imgAlt: 'idk', title: 'exclusive'},
    {id: '3', imgSrc: 'assets/cat-carousel/cat-carousel3.jpg', width: 275, imgAlt: 'idk', title: 'exclusive'},
    {id: '4', imgSrc: 'assets/cat-carousel/cat-carousel4.jpg', width: 275, imgAlt: 'idk', title: 'exclusive'},
    {id: '5', imgSrc: 'assets/cat-carousel/cat-carousel5.jpg', width: 275, imgAlt: 'idk', title: 'exclusive'},
  ];

  public customOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 4,
    // margin: 5,
    slideBy: 'page',
    // merge: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    // dotsSpeed: 500,
    dots: false,
    // dotsData: true,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    smartSpeed: 400,
    // fluidSpeed: 499,
    dragEndSpeed: 350,
    // dotsEach: 4,
    // center: true,
    // rewind: true,
    // rtl: true,
    startPosition: 1,
    // navText: [ '<i class=bi bi-caret-left></i>', '<i class=bi bi-caret-right></i>' ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      }
    },
    stagePadding: 40,
    // nav: true
  };

  // @ts-ignore
  activeSlides: SlidesOutputData;

  constructor() {
  }

  ngOnInit(): void {
  }

  getPassedData(data: any): void {
    this.activeSlides = data;
    console.log('HomeComponent');
    console.log(this.activeSlides);
  }

  getChangeData(data: any): void {
    this.activeSlides = data;
    console.log('HomeComponent -> change');
    console.log(data);
  }

  getChangedData(data: any): void {
    this.activeSlides = data;
    console.log('HomeComponent -> changed');
    console.log(data);
  }
}
