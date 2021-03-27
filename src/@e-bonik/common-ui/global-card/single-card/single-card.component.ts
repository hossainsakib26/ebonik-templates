import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {

  @Input() product: Product = new Product();
  @Input() showBody: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
