import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalTabComponent } from './global-tab/global-tab.component';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {GlobalCardModule} from '../global-card/global-card.module';
import {GlobalCarouselModule} from '../global-carousel/global-carousel.module';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { TabHeaderComponent } from './tab-header/tab-header.component';



@NgModule({
    declarations: [GlobalTabComponent, TabHeaderComponent],
    exports: [
        GlobalTabComponent
    ],
  imports: [
    CommonModule,
    NgbNavModule,
    GlobalCardModule,
    GlobalCarouselModule,
    CarouselModule
  ]
})
export class GlobalTabModule { }
