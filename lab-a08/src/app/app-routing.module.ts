import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './cadastros/clientes/clientes.component';
import { ProdutosComponent } from './cadastros/produtos/produtos.component';
import { VendasComponent } from './cadastros/vendas/vendas.component';
import { VendasItensComponent } from './cadastros/vendas-itens/vendas-itens.component';
import { VendasCadastroComponent } from './cadastros/vendas-cadastro/vendas-cadastro.component';


const routes: Routes = [
   { path: "clientes", component: ClientesComponent },
   { path: "produtos", component: ProdutosComponent },
   {
      path: "vendas",
      children: [
         { path: '', component: VendasComponent },
         { path: 'cadastro', component: VendasCadastroComponent },
         {
            path: 'cadastro/:codigo',
            component: VendasCadastroComponent,
            children: [
               { path: 'itens', component: VendasItensComponent }
            ]
         },
      ]
   },

];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
