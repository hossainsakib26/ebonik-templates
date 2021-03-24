import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FashionHomeRoutingModule} from './fashion-home-routing.module';
import {HomeComponent} from './home/home.component';
import {FeaturedCollectionComponent} from './featured-collection/featured-collection.component';
import {FashionTopbarComponent} from './fashion-topbar/fashion-topbar.component';
import {FashionNavComponent} from './fashion-nav/fashion-nav.component';
import {FashionCategoryCarouselComponent} from './fashion-category-carousel/fashion-category-carousel.component';
import {FashionCarouselComponent} from './fashion-carousel/fashion-carousel.component';
import {CarouselModule} from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HomeComponent,
    FeaturedCollectionComponent,
    FashionTopbarComponent,
    FashionNavComponent,
    FashionCategoryCarouselComponent,
    FashionCarouselComponent],
  imports: [
    CommonModule,
    FashionHomeRoutingModule,
    CarouselModule,
  ],
})
export class FashionHomeModule {
}
