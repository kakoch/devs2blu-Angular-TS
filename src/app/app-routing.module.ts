import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  //zerar a rota
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((h) => h.HomeModule)
  },

  {
    path: 'novo',
    loadChildren: () =>
      import('./components/cadastrar-produto/cadastrar-produto.module').then(
        (m) => m.CadastrarProdutoModule
      ),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
