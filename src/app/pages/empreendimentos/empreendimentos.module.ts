import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { EmpreendimentosPageRoutingModule } from './empreendimentos-routing.module';
import { EmpreendimentosComponent } from './empreendimentos.component';
import { NavModule } from 'src/app/components/nav/nav.module';
import { CardEmpreendimentoModule } from 'src/app/components/card-empreendimento/card-empreendimento.module';
import { EmpreendimentoIndividualComponent } from './empreendimento-individual/empreendimento-individual.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SlidePlantasComponent } from 'src/app/components/slide-plantas/slide-plantas.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    NavModule,
    CardEmpreendimentoModule,
    EmpreendimentosPageRoutingModule
  ],
  declarations: [EmpreendimentosComponent, EmpreendimentoIndividualComponent, 
    SlidePlantasComponent],
  exports: [EmpreendimentosComponent, EmpreendimentoIndividualComponent,SlidePlantasComponent]

})
export class EmpreendimentosPageModule {}
