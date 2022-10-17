import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpreendimentosComponent } from './empreendimentos.component';

const routes: Routes = [
  {
    path: '',
    component: EmpreendimentosComponent,
    children: [
      {
        path: ':id',
        component: EmpreendimentosComponent,
      },
    ]
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
