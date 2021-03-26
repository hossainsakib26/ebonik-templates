import {
  Component,
  OnInit
} from '@angular/core';
import {
  OwlOptions,
  SlidesOutputData
} from 'ngx-owl-carousel-o';
import {Image} from '../../../../models/fasion-model/image';
import {Category} from '../../../../models/category';
import {Product} from '../../../../models/product';

@Component({
  selector: 'app-fashion-category-carousel',
  templateUrl: './fashion-category-carousel.component.html',
  styleUrls: ['./fashion-category-carousel.component.scss']
})
export class FashionCategoryCarouselComponent implements OnInit {

  public products: Product[] = [];

  public categories: Category[] = [
    {
      id: 1,
      code: 'Cat-1',
      imageUrl: 'assets/cat-carousel/cat-carousel1.jpg',
      name: 'Man'
    },
    {
      id: 2,
      code: 'Cat-2',
      imageUrl: 'assets/cat-carousel/cat-carousel2.jpg',
      name: 'Woman'
    },
    {
      id: 3,
      code: 'Cat-3',
      imageUrl: 'assets/cat-carousel/cat-carousel3.jpg',
      name: 'Kids'
    },
    {
      id: 4,
      code: 'Cat-4',
      imageUrl: 'assets/cat-carousel/cat-carousel4.jpg',
      name: 'Life Style'
    },
    {
      id: 5,
      code: 'Cat-5',
      imageUrl: 'assets/cat-carousel/cat-carousel5.jpg',
      name: 'Offers'
    },
    {
      id: 6,
      code: 'Cat-6',
      imageUrl: 'assets/cat-carousel/cat-carousel1.jpg',
      name: 'Others'
    },
  ];

  public isCategory: boolean = true;

  public images: Image[] = [
    {
      id: '1',
      imgSrc: 'assets/cat-carousel/cat-carousel1.jpg',
      width: 275,
      imgAlt: 'idk',
      title: 'exclusive'
    },
    {
      id: '2',
      imgSrc: 'assets/cat-carousel/cat-carousel2.jpg',
      width: 275,
      imgAlt: 'idk',
      title: 'exclusive'
    },
    {
      id: '3',
      imgSrc: 'assets/cat-carousel/cat-carousel3.jpg',
      width: 275,
      imgAlt: 'idk',
      title: 'exclusive'
    },
    {
      id: '4',
      imgSrc: 'assets/cat-carousel/cat-carousel4.jpg',
      width: 275,
      imgAlt: 'idk',
      title: 'exclusive'
    },
    {
      id: '5',
      imgSrc: 'assets/cat-carousel/cat-carousel5.jpg',
      width: 275,
      imgAlt: 'idk',
      title: 'exclusive'
    },
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
    this.products = [
      {
        id: 1,
        name: 'Summer Jackate',
        price: 200,
        imgUrl: 'assets/cat-carousel/cat-carousel1.jpg',
        categoryName: 'Lather'
      },
      {
        id: 2,
        name: 'Formal Suit',
        price: 200,
        imgUrl: 'assets/cat-carousel/cat-carousel2.jpg',
        categoryName: 'Synthetic'
      },
      {
        id: 3,
        name: 'Rainy Jackate',
        price: 200,
        imgUrl: 'assets/cat-carousel/cat-carousel3.jpg',
        categoryName: 'Suti'
      },
      {
        id: 4,
        name: 'Summer Casual',
        price: 200,
        imgUrl: 'assets/cat-carousel/cat-carousel4.jpg',
        categoryName: 'Hotr'
      },
      {
        id: 5,
        name: 'Formal Tie',
        price: 200,
        imgUrl: 'assets/cat-carousel/cat-carousel5.jpg',
        categoryName: 'Formal'
      },
    ];
  }
}
