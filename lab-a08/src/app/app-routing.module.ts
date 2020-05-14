import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './cadastros/clientes/clientes.component';
import { ProdutosComponent } from './cadastros/produtos/produtos.component';
import { VendasComponent } from './cadastros/vendas/vendas.component';
import { VendasItensComponent } from './cadastros/vendas-itens/vendas-itens.component';


const routes: Routes = [
   { path: "clientes", component: ClientesComponent },
   { path: "produtos", component: ProdutosComponent },
   {
      path: "vendas", component: VendasComponent
   },
   {
      path: "vendas/:id", component: VendasComponent,
      children: [
         { path: "itens", component: VendasItensComponent }
      ]
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
