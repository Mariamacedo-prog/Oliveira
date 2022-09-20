import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { SlideCardComponent } from './slideCard.component';



@NgModule({
  declarations: [
    SlideCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SlideCardComponent
  ]
})
export class SlideCardModule { }
