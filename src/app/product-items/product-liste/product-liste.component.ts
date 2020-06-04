import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-liste',
  //templateUrl: './product-liste.component.html',
  templateUrl: './product-grid.component.html',

  styleUrls: ['./product-liste.component.css']
})
export class ProductListeComponent implements OnInit {

  produits:Produit[];


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.ListProducts();
  }
  ListProducts(){
    this.productService.getProducts().subscribe(
      data =>this.produits=data
    )
  }


}
