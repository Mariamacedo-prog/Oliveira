import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEmpreendimentoComponent } from './card-empreendimento.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CardEmpreendimentoComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [CardEmpreendimentoComponent]

})
export class CardEmpreendimentoModule { }
