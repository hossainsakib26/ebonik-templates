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
  templateUrl: './fashion-category.component.html',
  styleUrls: ['./fashion-category.component.scss']
})
export class FashionCategoryComponent implements OnInit {

  public products: Product[] = [
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

  public viewItems: number = 4;

  public largeScreenItemQty: number = 4;

  public showBody: boolean = false;

  // @ts-ignore
  activeSlides: SlidesOutputData;

  constructor() {
  }

  ngOnInit(): void {
  }
}
