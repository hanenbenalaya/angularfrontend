import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProductService } from 'src/app/services/product.service';
import { CategorieProdComponent } from 'src/app/components/categorie-prod/categorie-prod.component';
import { CategorieService } from 'src/app/services/categorie.service';
import { CategorieProd } from 'src/app/model/categorie-produit';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  curentCategoryId:number;
  submitted = false;
  categorie: CategorieProd;
  
  produit :Produit = new Produit();
  constructor(private categService: CategorieService,private productService: ProductService, private _activitedRouter: ActivatedRoute,private router: Router) { 
    this.curentCategoryId= +this._activitedRouter.snapshot.paramMap.get('id');
   
    this.categService.getCategorie(this.curentCategoryId).subscribe(
      data=>{
        this.categorie=data;
        console.log("categorie",this.categorie);
      })
     
  }

  ngOnInit(): void {
    this.produit.categorie=this.curentCategoryId;

    console.log("produit categorie",this.produit.categorie);
  }
  newProduct(): void {
    this.submitted = false;
    this.produit = new Produit();
  }

  save() {
    this.productService.createProduit(this.produit)
      .subscribe(data => console.log(data), error => console.log(error));
      console.log("product created",this.produit);
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save(); 
       
  }

  gotoList() {
    this.router.navigate(['/adminhome']);
  }

}
