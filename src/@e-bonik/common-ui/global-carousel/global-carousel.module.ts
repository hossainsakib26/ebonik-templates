import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalCarouselComponent} from './global-carousel/global-carousel.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {GlobalCardModule} from '../global-card/global-card.module';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { SingleImageCarouselComponent } from './single-image-carousel/single-image-carousel.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';


@NgModule({
  declarations: [GlobalCarouselComponent, SingleImageCarouselComponent, MainCarouselComponent],
    exports: [
        GlobalCarouselComponent,
        SingleImageCarouselComponent
    ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    CarouselModule,
    GlobalCardModule,
  ],
  bootstrap: [GlobalCarouselComponent]
})
export class GlobalCarouselModule {
}
