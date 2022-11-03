import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpreendimentoIndividualComponent } from './empreendimento-individual/empreendimento-individual.component';
import { EmpreendimentosComponent } from './empreendimentos.component';

const routes: Routes = [
  {
    path: '',
    component: EmpreendimentosComponent,
  },
  {
    path: ':id',
    component: EmpreendimentoIndividualComponent,
  },
  // {
  //   path: 'meus-pacientes',
  //   loadChildren: () => import('../../meus-pacientes/meus-pacientes.module').then(m => m.MeusPacientesPageModule)
  // },
  {
    path: '',
    redirectTo: 'empreendimentos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class EmpreendimentosPageRoutingModule {}
