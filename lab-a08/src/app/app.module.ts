import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './cadastros/clientes/clientes.component';
import { ProdutosComponent } from './cadastros/produtos/produtos.component';
import { VendasComponent } from './cadastros/vendas/vendas.component';
import { VendasItensComponent } from './cadastros/vendas-itens/vendas-itens.component';
import { VendasCadastroComponent } from './cadastros/vendas-cadastro/vendas-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProdutosComponent,
    VendasComponent,
    VendasItensComponent,
    VendasCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
