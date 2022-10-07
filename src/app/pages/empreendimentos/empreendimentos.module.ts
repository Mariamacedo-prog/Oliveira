import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { EmpreendimentosPageRoutingModule } from './empreendimentos-routing.module';
import { EmpreendimentosComponent } from './empreendimentos.component';
import { NavModule } from 'src/app/components/nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    NavModule,
    EmpreendimentosPageRoutingModule
  ],
  declarations: [EmpreendimentosComponent],
  exports: [EmpreendimentosComponent]

})
export class EmpreendimentosPageModule {}
