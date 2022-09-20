import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { SlideCarouselComponent } from './slideCarousel.component';



@NgModule({
  declarations: [
    SlideCarouselComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SlideCarouselComponent
  ]
})
export class SlideCarouselModule { }
