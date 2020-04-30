import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  public test(): Promise<any> {
     console.log("ok")
     return axios.get("http://localhost:8080/clientes");
  }

  public save(val: any):  Promise<any> {
     return axios.post("http://localhost:8080/clientes", val)
  }
}
