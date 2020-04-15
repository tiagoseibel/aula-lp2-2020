import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from './cliente-model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  titulo = "Texto do titulo";

   lista: any[] = [
      {"nome": "Tiago"},
      {"nome": "Luis"}
   ];

   // https://angular.io/guide/reactive-forms
   form: FormGroup;

  ngOnInit(): void {
   
     this.titulo = "novo valor";

      this.form = new FormGroup(
         {
            codigo: new FormControl("", Validators.required),
            nome: new FormControl()
         }
      );

  }

  public save(): void {

      let obj = Object.assign({}, this.form.value) as Cliente;

      this.lista.push(obj);

  }


  
}
