import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-prod-acceuil',
  templateUrl: './prod-acceuil.component.html',
  styleUrls: ['./prod-acceuil.component.css']
})

export class ProdAcceuilComponent implements OnInit {
  produits:Produit[];
  curentCategoryId: number;
searchMode: boolean;

numpages: number=0;
pages:Array<number>
numpage:number=0;
id:number=1;
  constructor(private productService:ProductService, 
    private _activitedRouter: ActivatedRoute,  private spinnerService: NgxSpinnerService,private router: Router) { }

    ngOnInit(): void {
      this.id=+this._activitedRouter.snapshot.paramMap.get('id');
      console.log("num categ",this.id);
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
    fixnumpage(i:number){
      this.numpage=i;
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
