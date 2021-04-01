import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {Product} from '../../../models/product';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-global-tab',
  templateUrl: './global-tab.component.html',
  styleUrls: ['./global-tab.component.scss']
})
export class GlobalTabComponent implements OnInit {

  public active: number = 1;
  disabled = true;
  public showBody: boolean = true;
  @Input() modelDatas: Product[] = [];

  public datas: Product[] = [];
  public data: Product = new Product();


  public customOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 6,
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
        items: 2
      },
      480: {
        items: 4
      },
      768: {
        items: 6
      }
    },
    stagePadding: 40,
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onNavChange(changeEvent: NgbNavChangeEvent): void {
    this.datas.length = 0;
    console.log(changeEvent);
    const tebIndex = changeEvent.nextId;
    if (tebIndex === 1) {
      this.datas = this.modelDatas.filter(c => c.productTypeName === 'Featured');
    } else if (tebIndex === 2) {
      this.datas = this.modelDatas.filter(c => c.productTypeName === 'Special');
    } else if (tebIndex === 3) {
      this.datas = this.modelDatas.filter(c => c.productTypeName === 'Onsale');
    }
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
    if (this.disabled) {
      this.active = 1;
    }
  }


}
