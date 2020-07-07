import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
   selector: 'app-vendas-itens',
   templateUrl: './vendas-itens.component.html'
})
export class VendasItensComponent implements OnInit {

   vendaId: any;

   constructor(
      private _activatedRoute: ActivatedRoute
   ) { }

   // https://angular.io/guide/router#activated-route-in-action
   // vendas/1/itens
   ngOnInit(): void {
      this.vendaId = this._activatedRoute.parent.snapshot.paramMap.get('codigo');
      console.log(this.vendaId)
   }

}
