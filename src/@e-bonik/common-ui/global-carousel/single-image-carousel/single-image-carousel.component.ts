import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ProductShortInfo} from '../../../models/product-short-info';

@Component({
  selector: 'app-single-image-carousel',
  templateUrl: './single-image-carousel.component.html',
  styleUrls: ['./single-image-carousel.component.scss']
})
export class SingleImageCarouselComponent implements OnInit {

  @Input() modelDatas: ProductShortInfo[] = [];

  public customOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 1,
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
    // nav: true,
    // navText: [ '<i class=bi bi-caret-left></i>', '<i class=bi bi-caret-right></i>' ],
    responsive: {
      0: {
        items: 1
      },
      360: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 1
      }
    },
    // stagePadding: 40,
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
