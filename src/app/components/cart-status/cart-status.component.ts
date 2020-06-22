import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {
totalPrice:number;//
totalQuantity:number;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }
  updateCartStatus() {
//subscribe to the event 
this.cartService.totalPrice.subscribe(
  data=>this.totalPrice=data
)
this.cartService.totalQuantity.subscribe(
  data=>this.totalQuantity=data
)
    
  }

}
