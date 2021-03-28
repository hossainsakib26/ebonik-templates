import {
  Component,
  OnInit
} from '@angular/core';
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
    {
      id: 6,
      name: 'Rainy Jackate',
      price: 200,
      imgUrl: 'assets/cat-carousel/cat-carousel3.jpg',
      categoryName: 'Suti'
    },
    {
      id: 7,
      name: 'Summer Casual',
      price: 200,
      imgUrl: 'assets/cat-carousel/cat-carousel4.jpg',
      categoryName: 'Hotr'
    },
    {
      id: 8,
      name: 'Formal Tie',
      price: 200,
      imgUrl: 'assets/cat-carousel/cat-carousel5.jpg',
      categoryName: 'Formal'
    },
    {
      id: 9,
      name: 'Rainy Jackate',
      price: 200,
      imgUrl: 'assets/cat-carousel/cat-carousel3.jpg',
      categoryName: 'Suti'
    },
    {
      id: 10,
      name: 'Summer Casual',
      price: 200,
      imgUrl: 'assets/cat-carousel/cat-carousel4.jpg',
      categoryName: 'Hotr'
    },
    {
      id: 11,
      name: 'Formal Tie',
      price: 200,
      imgUrl: 'assets/cat-carousel/cat-carousel5.jpg',
      categoryName: 'Formal'
    },
  ];

  public viewItems: number = 4;
  constructor() {
  }

  ngOnInit(): void {
  }

}
