import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-liste',
  //templateUrl: './product-liste.component.html',
  templateUrl: './product-grid.component.html',

  styleUrls: ['./product-liste.component.css']
})
export class ProductListeComponent implements OnInit {

  produits:Produit[];
  curentCategoryId: number;


  constructor(private productService:ProductService, 
    private _activitedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._activitedRouter.paramMap.subscribe(()=>{
    this.ListProducts();
  } )
  }
  ListProducts(){

    const hasCategoryId:boolean= this._activitedRouter.snapshot.paramMap.has('id'); 
    if(hasCategoryId){
     this.curentCategoryId= +this._activitedRouter.snapshot.paramMap.get('id');

    }else{
    this.curentCategoryId=1;

     }
    this.productService.getProducts(this.curentCategoryId).subscribe(
      data =>this.produits=data
    )
  }


}
