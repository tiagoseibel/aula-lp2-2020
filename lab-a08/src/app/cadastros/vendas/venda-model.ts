import { Cliente } from "../clientes/cliente-model";

export interface Venda {
   id: number;
   cliente?: Cliente;
   valorTotal: number;
   dataVenda: any;
}