import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpreendimentosComponent } from './empreendimentos.component';

const routes: Routes = [
  {
    path: '',
    component: EmpreendimentosComponent,
    children: [
      {
        path: 'page',
        loadChildren: () => import('./empreendimentos.module').then(m => m.EmpreendimentosPageModule)
      },
      {
        path: '',
        redirectTo: 'empreendimentos',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: 'meus-pacientes',
  //   loadChildren: () => import('../../meus-pacientes/meus-pacientes.module').then(m => m.MeusPacientesPageModule)
  // },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class EmpreendimentosPageRoutingModule {}
