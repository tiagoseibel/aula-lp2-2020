import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendasService } from 'src/app/services/vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html'
})
export class VendasComponent implements OnInit {

  constructor(
     private _router: Router,
     private _vendaService: VendasService
  ) { }

  ngOnInit(): void {
   this.listar();
  }

  listaDeVendas: any;

  listar(): void {
      this._vendaService.findAll()
      .then(
         (response) => {
            this.listaDeVendas = response.data;
         }
      )
      .catch( (error) => alert(error) );
  }

  imprimir(): void {
     this._vendaService.relatorio()
     .then(
        (response) => {
           var blob = new Blob([response.data], {
              type: 'application/pdf'
           });
           var url = window.URL.createObjectURL(blob);
           window.open(url);
        }
     )
     .catch(
         (error) => alert(error)
     );
  }

  editar(id: number):void {
   this._router.navigate(["/vendas/"+id+"/itens"]);
  }

}
