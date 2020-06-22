

import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/model/cart-item';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.css']
})

export class ProductListAdminComponent implements OnInit {

  produits:Produit[];
  curentCategoryId: number;
searchMode: boolean;
//pageOfItems: Array<Produit>;
//pageSize:number=6;

  constructor(private productService:ProductService, 
    private _activitedRouter: ActivatedRoute,  private spinnerService: NgxSpinnerService,private router: Router) { }

  ngOnInit(): void {
    this._activitedRouter.paramMap.subscribe(()=>{
    this.ListProducts();
  } )
  }


 // pageClick(pageOfItems:Array<Produit>){
    //update the current page items
   // this.pageOfItems=pageOfItems;}
   deleteProduit(id: number) {
    this.productService.deleteProduit(id)
      .subscribe(
        data => {
          console.log(data);
          this.ListProducts();
        },
        error => console.log(error));
  }

 //deleteProduit(produit:Produit){
 // console.log(`nom produit: ${produit.nomProduit}, et prix:${produit.prixProduit} `);
 // console.log("id produit:",produit.idProduit );

 //this.productService.deleteProduit(produit.idProduit);
  
 



  


  ListProducts(){
    //starts the spinner
    this.spinnerService.show;
  this.searchMode=  this._activitedRouter.snapshot.paramMap.has('keyword');
 if(this.searchMode){
   //do the search work
   this.handelSearchProducts();
 }else{
   //display products based on  category
   this.handelListProducts();
 }
  }
 handelListProducts(){


  const hasCategoryId:boolean= this._activitedRouter.snapshot.paramMap.has('id'); 
  if(hasCategoryId){
   this.curentCategoryId= +this._activitedRouter.snapshot.paramMap.get('id');

  }else{
  this.curentCategoryId=1;

   }
  this.productService.getProducts(this.curentCategoryId).subscribe(
    data =>{this.produits=data;
    console.log(this.produits)}

  )
}


 
 handelSearchProducts(){

 const keyword: String =this._activitedRouter.snapshot.paramMap.get('keyword');
this.productService.searchProducts(keyword).subscribe(
  data=>{
    this.produits=data;
    console.log(" produits:",data);
  }
)

 }
 updateproduct(id: number){
  this.router.navigate(['updateprod', id]);
}

}

