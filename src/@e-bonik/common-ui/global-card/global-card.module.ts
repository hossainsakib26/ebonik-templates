import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalCardComponent } from './global-card/global-card.component';
import { SingleCardComponent } from './single-card/single-card.component';



@NgModule({
  declarations: [GlobalCardComponent, SingleCardComponent],
  imports: [
    CommonModule
  ],
  exports: [GlobalCardComponent, SingleCardComponent]
})
export class GlobalCardModule { }
