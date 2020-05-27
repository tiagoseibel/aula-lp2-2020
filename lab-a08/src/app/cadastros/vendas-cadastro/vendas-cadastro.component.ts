import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
   selector: 'app-vendas-cadastro',
   templateUrl: './vendas-cadastro.component.html'
})
export class VendasCadastroComponent implements OnInit {

   constructor() { }

   form: FormGroup;

   // https://angular.io/guide/form-validation
   // https://angular.io/api/forms/Validators
   ngOnInit(): void {
      this.form = new FormGroup(
         {
            id: new FormControl(),
            cliente: new FormControl('', [Validators.required, Validators.minLength(10)]),
            valorTotal: new FormControl(),
            dataVenda: new FormControl(),
         }
      );
   }

   public save(): void {

   }

}
