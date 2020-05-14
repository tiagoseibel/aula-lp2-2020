import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html'
})
export class VendasComponent implements OnInit {

  constructor(
     private _router: Router
  ) { }

  ngOnInit(): void {

  }

  editar():void {
   this._router.navigate(["/vendas/1/itens"]);
  }

}
