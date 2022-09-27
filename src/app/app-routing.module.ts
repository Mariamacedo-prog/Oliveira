import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [  { path: '', component: HomeComponent },
{ path: 'sobre', component: AboutComponent }
// { path: 'sobre', component: SobreNosComponent },
// {
//   path: 'empreendimentos',
//   loadChildren: () => import('../app/pages/obras/obras.module').then(m => m.ObrasModule)

// },
// { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
