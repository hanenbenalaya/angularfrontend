import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProductService } from 'src/app/services/product.service';
import { CategorieService } from 'src/app/services/categorie.service';

import { CategorieProd } from 'src/app/model/categorie-produit';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  curentCategoryId:number;
  submitted = false;
  categorie: CategorieProd;
  profilePicture: string = null;
  produit :Produit = new Produit();
  public thingForm: FormGroup;
  urlpic: string ="http://localhost:4200/assets/image/produits/"

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
  handleProfilePictureInput(file) {
    console.log("file:", file[0].name);
    this.produit.urlImage_produit=this.urlpic+file[0].name;
    console.log('image:',this.produit.urlImage_produit)
    this.getBase64(file[0])
        .subscribe(str => this.profilePicture = str);
        console.log("picture :",this.profilePicture);

  }
  getBase64(file): Observable<string> {
    return new Observable<string>(sub => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      console.log("reader", reader);
      reader.onload = () => {
        sub.next(reader.result.toString());
        sub.complete();
      };
      reader.onerror = error => {
        sub.error(error);
      };
    })
  }
  onSubmit() {
    this.submitted = true;
    this.save(); 
       
  }

  gotoList() {
    this.router.navigate(['/adminhome']);
  }

}
