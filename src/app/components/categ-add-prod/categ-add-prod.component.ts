import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategorieProd } from 'src/app/model/categorie-produit';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categ-add-prod',
  templateUrl: './categ-add-prod.component.html',
  styleUrls: ['./categ-add-prod.component.css']
})
export class CategAddProdComponent implements OnInit {
  categProd:Observable<CategorieProd[]>;
 
  constructor(private produitservice:ProductService) { }

  ngOnInit(): void {
   this.listeCategProd();
}

listeCategProd(){
  this.produitservice.getcatprod().subscribe(
data=>{
  this.categProd=data,
  console.log("Categorie produit:",data);
}
  );

}

}
