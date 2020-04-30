import { Injectable } from '@angular/core';

import axios from 'axios';
import { Cliente } from '../cadastros/clientes/cliente-model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

   url:string = "http://localhost:8080/clientes";

  constructor() { }

   public findAll(): Promise<any> {
      return axios.get(this.url);
   }

   public save(cliente: Cliente): Promise<any> {
      if (cliente.codigo > 0) {
         return axios.put(this.url + "/" + cliente.codigo, cliente);   
      } else {
         return axios.post(this.url, cliente);
      }      
   }

   public delete(codigo: number): Promise<any> {
      return axios.delete(this.url + "/" + codigo);
   }
}
