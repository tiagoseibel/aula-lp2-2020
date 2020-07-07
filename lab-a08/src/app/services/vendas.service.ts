import { Injectable } from '@angular/core';

import axios from 'axios';
import { Venda } from '../cadastros/vendas/venda-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

   url =  environment.serverUrl + "vendas";

   public findAll(): Promise<any> {
      return axios.get(this.url);
   }

   public save(venda: Venda): Promise<any> {
      if(venda.id > 0) {
         return axios.put(this.url + "/" + venda.id, venda);
      } else {
         return axios.post(this.url, venda);
      }      
   }

   public delete(venda_id: number): Promise<any> {
      return axios.delete(this.url + "/" + venda_id);
   }

   public relatorio(): Promise<any> {
      return axios.get(this.url + "/relatorio", {responseType: "blob"});
   }

  constructor() { }
}
