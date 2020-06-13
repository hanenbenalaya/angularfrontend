import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
cartItems:CartItem[]=[];
totalPrice: number=0;
totalQuantity:number=0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartDetails();
  }
  cartDetails() {
this.cartItems=this.cartService.cartItems;
this.cartService.totalPrice.subscribe(
  data=>this.totalPrice=data
) ;
this.cartService.totalQuantity.subscribe(
  data=>this.totalQuantity=data
) ;

this.cartService.calculateTotalPrice();
}
incrementQuantity(cartItem:CartItem){
  console.log('increment quantity',cartItem);
  this.cartService.addToCart(cartItem);
}
decrementQuantity(cartitem:CartItem){
  console.log('decrement quantity',cartitem);
  this.cartService.decrementQuantity(cartitem) ;


}
remove(cartitem:CartItem){
  console.log('remove item',cartitem);
  this.cartService.remove(cartitem) ;


}


}
