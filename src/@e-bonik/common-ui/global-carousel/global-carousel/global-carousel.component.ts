import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {Product} from '../../../models/product';
import {Category} from '../../../models/category';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-global-carousel',
  templateUrl: './global-carousel.component.html',
  styleUrls: ['./global-carousel.component.scss']
})
export class GlobalCarouselComponent implements OnInit {

  @Input() product: Product = new Product();
  @Input() products: Product[];
  @Input() Categories: Category[];
  @Input() showBody: boolean = false;

  // for product view by screen size
  @Input() largeScreenItemQty: number = 6;
  @Input() midScreenItemQty: number = 4;

  @Input() viewItems: number = 0;

  public customOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: this.viewItems,
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
      360: {
        items: 2
      },
      480: {
        items: this.midScreenItemQty
      },
      768: {
        items: this.largeScreenItemQty
      }
    },
    stagePadding: 40,
    // nav: true
  };

  constructor() {
    this.product = new Product();
    this.products = [];
    this.Categories = [];
  }

  ngOnInit(): void {
  }

}
