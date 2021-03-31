import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyHomeRoutingModule } from './technology-home-routing.module';
import { HomeComponent } from './home/home.component';
import { TechnologyTopBarComponent } from './technology-top-bar/technology-top-bar.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { TechnologySearchBarComponent } from './technology-search-bar/technology-search-bar.component';
import {TechnologyModule} from '../technology.module';
import { TechnologyMenubarComponent } from './technology-menubar/technology-menubar.component';
import { CarouselSectionComponent } from './carousel-section/carousel-section.component';
import {GlobalCarouselModule} from '../../../common-ui/global-carousel/global-carousel.module';
import { AuthorPolicyComponent } from './author-policy/author-policy.component';


@NgModule({
  declarations: [HomeComponent, TechnologyTopBarComponent, TechnologySearchBarComponent, TechnologyMenubarComponent, CarouselSectionComponent, AuthorPolicyComponent],
    imports: [
        CommonModule,
        TechnologyHomeRoutingModule,
        NgbDropdownModule,
        TechnologyModule,
        GlobalCarouselModule
    ]
})
export class TechnologyHomeModule { }
