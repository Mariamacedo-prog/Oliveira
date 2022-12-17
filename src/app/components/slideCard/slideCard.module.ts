import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { SlideCardComponent } from './slideCard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SlideCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule

  ],
  exports: [
    SlideCardComponent
  ]
})
export class SlideCardModule { }
