import {
  Component,
  OnInit
} from '@angular/core';
import {ProductShortInfo} from '../../../../models/product-short-info';

@Component({
  selector: 'app-carousel-section',
  templateUrl: './carousel-section.component.html',
  styleUrls: ['./carousel-section.component.scss']
})
export class CarouselSectionComponent implements OnInit {

  public productShortInfos: ProductShortInfo[] = [
    { id: 1, name: 'Smart Package', price: 200, shortDetails: 'Get Your Package', imageUrl: 'assets/shortProduct/ps1.jpg' },
    { id: 2, name: 'Smart Watch', price: 500, shortDetails: 'Multi Type Sensore', imageUrl: 'assets/shortProduct/ps2.jpg' },
    { id: 3, name: 'Apple Watch', price: 1000, shortDetails: 'The Ultimate Body Scanner', imageUrl: 'assets/shortProduct/ps3.jpg' },
    { id: 4, name: 'Smart Desk Setup', price: 150, shortDetails: 'Order our smart setup tools', imageUrl: 'assets/shortProduct/ps4.jpg' },
    { id: 5, name: 'IPhone', price: 1100, shortDetails: 'new apple technology', imageUrl: 'assets/shortProduct/ps5.jpg' },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
