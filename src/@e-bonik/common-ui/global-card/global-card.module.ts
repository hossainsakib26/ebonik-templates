import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalCardComponent } from './global-card/global-card.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { MainCardComponent } from './main-card/main-card.component';
import {NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [GlobalCardComponent, SingleCardComponent, MainCardComponent],
  imports: [
    CommonModule,
    NgbButtonsModule
  ],
    exports: [GlobalCardComponent, SingleCardComponent, MainCardComponent]
})
export class GlobalCardModule { }
