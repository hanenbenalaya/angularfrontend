import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

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

}
