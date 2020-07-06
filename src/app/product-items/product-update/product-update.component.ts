import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  profilePicture: string = null;

  id: number;
  produit: Produit;
  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.produit = new Produit();

    this.id = this.route.snapshot.params['id'];
    
    this.productService.getPriduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.produit = data;
      }, error => console.log(error));
  }

  updateProduit() {
    this.productService.updateProduit(this.id, this.produit)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produit = new Produit();
   
  }
  handleProfilePictureInput(file) {
    console.log("file:", file);
    this.getBase64(file[0])
        .subscribe(str => this.profilePicture = str);
        console.log(this.profilePicture);
  }
  
  getBase64(file): Observable<string> {
    return new Observable<string>(sub => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        sub.next(reader.result.toString());
        sub.complete();
      };
      reader.onerror = error => {
        sub.error(error);
      };
    })
  }

}
