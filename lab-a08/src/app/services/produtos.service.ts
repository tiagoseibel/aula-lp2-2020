import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  public test(): Promise<any> {
     console.log("ok")
     return axios.get( environment.serverUrl + "clientes");
  }

  public save(val: any):  Promise<any> {
     return axios.post( environment.serverUrl +"clientes", val)
  }
}
