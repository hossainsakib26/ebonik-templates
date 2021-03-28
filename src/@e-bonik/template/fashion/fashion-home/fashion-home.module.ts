import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FashionHomeRoutingModule} from './fashion-home-routing.module';
import {HomeComponent} from './home/home.component';
import {FeaturedCollectionComponent} from './featured-collection/featured-collection.component';
import {FashionTopbarComponent} from './fashion-topbar/fashion-topbar.component';
import {FashionNavComponent} from './fashion-nav/fashion-nav.component';
import {FashionCategoryComponent} from './fashion-category/fashion-category.component';
import {FashionCarouselComponent} from './fashion-carousel/fashion-carousel.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NewArrivalsComponent} from './new-arrivals/new-arrivals.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TopCollectionComponent} from './top-collection/top-collection.component';
import {FastiveCollectionComponent} from './fastive-collection/fastive-collection.component';
import {VideoGalarySectionComponent} from './video-galary-section/video-galary-section.component';
import {GlobalCardModule} from '../../../common-ui/global-card/global-card.module';
import {GlobalCarouselModule} from '../../../common-ui/global-carousel/global-carousel.module';
import { FashionFooterComponent } from './fashion-footer/fashion-footer.component';


@NgModule({
  imports: [
    CommonModule,
    FashionHomeRoutingModule,
    NgbCarouselModule,
    NgbModule,
    CarouselModule,
    FontAwesomeModule,
    GlobalCardModule,
    GlobalCarouselModule
  ],
  declarations: [
    HomeComponent,
    FeaturedCollectionComponent,
    FashionTopbarComponent,
    FashionNavComponent,
    FashionCategoryComponent,
    FashionCarouselComponent,
    NewArrivalsComponent,
    TopCollectionComponent,
    FastiveCollectionComponent,
    VideoGalarySectionComponent,
    FashionFooterComponent],
  bootstrap: [FashionCarouselComponent],
  exports: [FashionCarouselComponent],
})
export class FashionHomeModule {
}
