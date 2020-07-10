import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { CategorieProd } from 'src/app/model/categorie-produit';

@Component({
  selector: 'app-categorie-acceuil',
  templateUrl: './categorie-acceuil.component.html',
  styleUrls: ['./categorie-acceuil.component.css']
})
export class CategorieAcceuilComponent implements OnInit {
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
