import { Component, OnInit } from '@angular/core';
import {Image} from '../../../../models/fasion-model/image';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-top-collection',
  templateUrl: './top-collection.component.html',
  styleUrls: ['./top-collection.component.scss']
})
export class TopCollectionComponent implements OnInit {
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
    items: 3,
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


  constructor() { }

  ngOnInit(): void {
  }

}
