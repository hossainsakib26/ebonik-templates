import {
  Component,
  OnInit
} from '@angular/core';
import { Product } from 'src/@e-bonik/models/product';
import {ProductShortInfo} from 'src/@e-bonik/models/product-short-info';

@Component({
  selector: 'app-product-tab-section',
  templateUrl: './product-tab-section.component.html',
  styleUrls: ['./product-tab-section.component.scss']
})
export class ProductTabSectionComponent implements OnInit {

  public datas: Product[] = [
    {
      id: 1,
      categoryName: 'Leptop',
      name: 'Asus Vivo',
      productTypeName: 'Featured',
      price: 200,
      imgUrl: 'assets/shortProduct/ps6.jpg'
    },
    {
      id: 2,
      categoryName: 'Leptop',
      name: 'Asus Vivo',
      productTypeName: 'Featured',
      price: 200,
      imgUrl: 'assets/shortProduct/ps6.jpg'
    },
    {
      id: 3,
      categoryName: 'Leptop',
      name: 'Asus Vivo',
      productTypeName: 'Special',
      price: 200,
      imgUrl: 'assets/shortProduct/ps6.jpg'
    },
    {
      id: 4,
      categoryName: 'Leptop',
      name: 'Asus Vivo',
      productTypeName: 'Onsale',
      price: 200,
      imgUrl: 'assets/shortProduct/ps6.jpg'
    },
    {
      id: 5,
      categoryName: 'Leptop',
      name: 'Asus Vivo',
      productTypeName: 'Onsale',
      price: 200,
      imgUrl: 'assets/shortProduct/ps6.jpg'
    },
    {
      id: 6,
      categoryName: 'Leptop',
      name: 'Asus Vivo',
      productTypeName: 'Onsale',
      price: 200,
      imgUrl: 'assets/shortProduct/ps6.jpg'
    },
    {
      id: 7,
      categoryName: 'Leptop',
      name: 'Asus Vivo',
      productTypeName: 'Onsale',
      price: 200,
      imgUrl: 'assets/shortProduct/ps6.jpg'
    },
    {
      id: 8,
      categoryName: 'Leptop',
      name: 'Asus Vivo',
      productTypeName: 'Special',
      price: 200,
      imgUrl: 'assets/shortProduct/ps6.jpg'
    },
    {
      id: 9,
      categoryName: 'Leptop',
      name: 'Asus Vivo',
      productTypeName: 'Special',
      price: 200,
      imgUrl: 'assets/shortProduct/ps6.jpg'
    },
    {
      id: 10,
      categoryName: 'Leptop',
      name: 'Asus Vivo',
      productTypeName: 'Special',
      price: 200,
      imgUrl: 'assets/shortProduct/ps6.jpg'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
