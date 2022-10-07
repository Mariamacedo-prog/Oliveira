import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PortalComponent } from './pages/portal/portal.component';

const routes: Routes = [  { path: '', component: HomeComponent },
{ path: 'sobre', component: AboutComponent },
{ path: 'portal-cliente', component: PortalComponent },
{ path: 'fale-conosco', component: FaleConoscoComponent },
{
  path: 'empreendimentos',
  loadChildren: () => import('./pages/empreendimentos/empreendimentos.module').then(m => m.EmpreendimentosPageModule)
}
// { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
