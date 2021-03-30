import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyHomeRoutingModule } from './technology-home-routing.module';
import { HomeComponent } from './home/home.component';
import { TechnologyTopBarComponent } from './technology-top-bar/technology-top-bar.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { TechnologySearchBarComponent } from './technology-search-bar/technology-search-bar.component';
import {TechnologyModule} from '../technology.module';


@NgModule({
  declarations: [HomeComponent, TechnologyTopBarComponent, TechnologySearchBarComponent],
  imports: [
    CommonModule,
    TechnologyHomeRoutingModule,
    NgbDropdownModule,
    TechnologyModule
  ]
})
export class TechnologyHomeModule { }