import { Component, OnInit } from '@angular/core';
import {Image} from '../../../../models/fasion-model/image';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {Product} from '../../../../models/product';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent implements OnInit {

  public products: Product[] = [
    {id: 1, name: 'Summer Jackate', price: 200, imgUrl: 'assets/cat-carousel/cat-carousel1.jpg', categoryName: 'Lather'},
    {id: 2, name: 'Formal Suit', price: 200, imgUrl: 'assets/cat-carousel/cat-carousel2.jpg', categoryName: 'Synthetic'},
    {id: 3, name: 'Rainy Jackate', price: 200, imgUrl: 'assets/cat-carousel/cat-carousel3.jpg', categoryName: 'Suti'},
    {id: 4, name: 'Summer Casual', price: 200, imgUrl: 'assets/cat-carousel/cat-carousel4.jpg', categoryName: 'Hotr'},
    {id: 5, name: 'Formal Tie', price: 200, imgUrl: 'assets/cat-carousel/cat-carousel5.jpg', categoryName: 'Formal'},
    {id: 6, name: 'Rainy Jackate', price: 200, imgUrl: 'assets/cat-carousel/cat-carousel3.jpg', categoryName: 'Suti'},
    {id: 7, name: 'Summer Casual', price: 200, imgUrl: 'assets/cat-carousel/cat-carousel4.jpg', categoryName: 'Hotr'},
    {id: 8, name: 'Formal Tie', price: 200, imgUrl: 'assets/cat-carousel/cat-carousel5.jpg', categoryName: 'Formal'},
    {id: 9, name: 'Rainy Jackate', price: 200, imgUrl: 'assets/cat-carousel/cat-carousel3.jpg', categoryName: 'Suti'},
    {id: 10, name: 'Summer Casual', price: 200, imgUrl: 'assets/cat-carousel/cat-carousel4.jpg', categoryName: 'Hotr'},
    {id: 11, name: 'Formal Tie', price: 200, imgUrl: 'assets/cat-carousel/cat-carousel5.jpg', categoryName: 'Formal'},
  ];

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
    items: 8,
    // margin: 5,
    slideBy: 'page',
    merge: true,
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
    fluidSpeed: true,
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
        items: 4
      }
    },
    stagePadding: 40,
    // nav: true
  };

  public viewItems: number = 6;

  constructor() { }

  ngOnInit(): void {
  }

}
