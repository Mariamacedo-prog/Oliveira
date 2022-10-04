import { FormularioComponent } from './formulario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],

  exports: [FormularioComponent]
})
export class FormularioModule { }