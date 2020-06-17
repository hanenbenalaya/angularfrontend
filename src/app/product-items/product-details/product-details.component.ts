import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
produit: Produit=new Produit;
  constructor(private cartService : CartService,private activatedRoutr: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    this.activatedRoutr.paramMap.subscribe(
()=>{
  this.getProductInfo();
}


    )
  }
getProductInfo(){

const id:number=+this.activatedRoutr.snapshot.paramMap.get('id');
console.log(id);
this.productService.getPriduct(id).subscribe(
  data=>{
    this.produit=data;
    console.log(data);
  }
)

}
addToCart(){
  const cartItem = new CartItem(this.produit);
  this.cartService.addToCart(cartItem);
}


}