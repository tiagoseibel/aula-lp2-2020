import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from './cliente-model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
     private cs: ClientesService
  ) { }

  titulo = "Texto do titulo";

   lista: any[] = [];

   // https://angular.io/guide/reactive-forms
   form: FormGroup;

   listar():void {
      this.cs.findAll()
         .then( (response) => {
            this.lista = response.data;
         } )
         .catch(
            (error) => {
               alert(error);
            }
         )
   }

  ngOnInit(): void {
   
     this.titulo = "novo valor";

      this.form = new FormGroup(
         {
            codigo: new FormControl("", Validators.required),
            nome: new FormControl()
         }
      );

      this.listar();

  }

  public save(): void {

      let obj = Object.assign({}, this.form.value) as Cliente;

      this.cs.save(obj)
         .then(
            (response) => {
               if (response && response.status === 201) {
                  alert("Cliente registrado!");
                  this.listar();
               }

               if (response && response.status === 200) {
                  alert("Cliente atualizado!");
                  this.listar();
               }
            }
         )
         .catch(
            (error) => {
               alert(error.request.responseText);
            }
         )

  }

  public excluir(item: Cliente): void {
     if (confirm("Certeza disso?")) {
         this.cs.delete(item.codigo)
         .then(
            (response) => {
               this.listar();
            }
         )
         .catch(
            (error) => {
               alert(error)
            }
         )
     }
  }

  public select(item: Cliente):void {
      this.form.patchValue(item);
  }

  
}
