import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
   selector: 'app-produtos',
   templateUrl: './produtos.component.html',
   styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

   constructor(private ps: ProdutosService) { }

   ngOnInit(): void {

      let prod = {
         "codigo": 10,
         "nome": "Quero-Quero"
      }

      this.ps.save(prod).then(
         (response) => {
            console.log(response.data)
         }
      ).catch( (error) => {
         console.log(error);
      }
      )

      this.ps.test()
         .then(
            (response) => {
               console.log(response.data)
            }
         );
   }

}
