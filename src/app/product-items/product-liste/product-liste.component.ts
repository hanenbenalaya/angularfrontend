import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/model/cart-item';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-liste',
  //templateUrl: './product-liste.component.html',
  templateUrl: './product-grid.component.html',

  styleUrls: ['./product-liste.component.css']
})
export class ProductListeComponent implements OnInit {

  produits:Produit[];
  curentCategoryId: number;
searchMode: boolean;
//pageOfItems: Array<Produit>;
//pageSize:number=6;
numpages: number=0;
pages:Array<number>
numpage:number=0;
id:number=1;
  constructor(private productService:ProductService, 
    private _activitedRouter: ActivatedRoute, private cartService:CartService, private spinnerService: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.id=+this._activitedRouter.snapshot.paramMap.get('id');
    if (this.id==0){this.id=1}
   this.productService.getNbrPages(this.id,0,4).subscribe(
    totalPages=>{this.numpages=totalPages
      console.log("nbr pages",this.numpages);
      this.pages=new Array(this.numpages);
      console.log("tableau",this.pages);

    }

    )



    this._activitedRouter.paramMap.subscribe(()=>{
    this.ListProducts();
  } )
  }


 // pageClick(pageOfItems:Array<Produit>){
    //update the current page items
   // this.pageOfItems=pageOfItems;}
   fixnumpage(i:number){
     this.numpage=i;
   }
 addToCart(produit:Produit){
   console.log(`nom produit: ${produit.nomProduit}, et prix:${produit.prixProduit} `);
 const cartItem=new CartItem(produit.idProduit,produit.nomProduit,produit.urlImage_produit,produit.prixProduit);
 this.cartService.addToCart(cartItem);
 }



  


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
  this.productService.getProdByCat(this.curentCategoryId,this.numpage,4).subscribe(
    data =>{this.produits=data.articles;
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

}
