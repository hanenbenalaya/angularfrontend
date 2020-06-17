import { Component, OnInit } from '@angular/core';
import { CategorieProd } from 'src/app/model/categorie-produit';
import { CategorieService } from 'src/app/services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.css']
})
export class AjoutCategorieComponent implements OnInit {
categorie: CategorieProd= new CategorieProd;
submitted = false;
  constructor(private categorieService:CategorieService,private router: Router ) { }


  ngOnInit(): void {
  }
  newCategorie(): void {
    this.submitted = false;
    this.categorie = new CategorieProd();
  }
  save() {
    this.categorieService.createCategorie(this.categorie)
      .subscribe(data => console.log(data), error => console.log(error));
      console.log("categorie created",this.categorie);
    this.categorie = new CategorieProd();
    this.gotoList();
  }
  
  onsubmit() {
    this.submitted = true;
    this.save(); 
       
  }
  gotoList() {
    this.router.navigate(['/adminhome']);
  }


}
