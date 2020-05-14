import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
      this.vendaId = this._activatedRoute.paramMap.pipe(
         switchMap( 
            (params: ParamMap) => params.get('id')
         )
      );
      console.log(this.vendaId)
   }

}
