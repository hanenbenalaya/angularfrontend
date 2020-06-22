import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { CommandItems } from 'src/app/model/command-items';
import { Produit } from 'src/app/model/produit';
import { Prod } from 'src/app/model/prod';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
cartItems:CartItem[]=[];//
totalPrice: number=0;
totalQuantity:number=0;//
cmd:CommandItems=new CommandItems
ids:string
rslt:any
i: number;
  constructor(private cartService:CartService) {
   this.ids =localStorage.getItem("client id ");
   console.log("current client id :" ,this.ids)
 
   
  
   }

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
confirmCmd(){
  for(this.i=0;this.i<this.cartItems.length;this.i++) {
    
    this.cmd.product_list[this.i]=new Prod(this.cartItems[this.i])
   

 }
 console.log(this.totalPrice)

  this.cmd.mnt_tot=this.totalPrice
  this.cmd.clt_id=parseInt(this.ids);
  console.log("les donneés a envoyer",this.cmd);
  console.log("produits a envoyer",this.cmd.product_list);
  this.cartService.confirmcmd(this.cmd).subscribe(data=>this.rslt=data);
  console.log("les donneés recu",this.rslt);



}


}
