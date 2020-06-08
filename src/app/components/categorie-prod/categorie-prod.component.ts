import { Component, OnInit } from '@angular/core';
import { CategorieProd } from 'src/app/model/categorie-produit';
import { ProductService } from 'src/app/services/product.service';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-categorie-prod',
  templateUrl: './categorie-prod.component.html',
  styleUrls: ['./categorie-prod.component.css']
})
export class CategorieProdComponent implements OnInit {

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