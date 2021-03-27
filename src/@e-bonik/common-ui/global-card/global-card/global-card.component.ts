import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {Product} from '../../../models/product';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-global-card',
  templateUrl: './global-card.component.html',
  styleUrls: ['./global-card.component.scss']
})
export class GlobalCardComponent implements OnInit {

  @Input() products: Product[] = [];
  @Input() Categories: Category[] = [];
  @Input() showBody: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
  }

}
