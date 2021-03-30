import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { CartShortViewComponent } from './cart-short-view/cart-short-view.component';
import { TechnologySearchComponent } from './technology-search/technology-search.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [CartShortViewComponent, TechnologySearchComponent],
    exports: [
        CartShortViewComponent,
        TechnologySearchComponent
    ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    NgbDropdownModule
  ]
})
export class TechnologyModule { }
