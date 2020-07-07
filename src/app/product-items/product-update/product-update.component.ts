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
urlpic: string ="http://localhost:4200/assets/image/produits/"
  id: number;
  produit: Produit;
  profilePicture: string = null;

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
  updateProduit() {
   
    this.productService.updateProduit(this.id, this.produit)
      .subscribe(data => console.log("data",data), error => console.log(error));
    this.produit = new Produit();
    this.router.navigate(['adminhome']);
  }
 

}
