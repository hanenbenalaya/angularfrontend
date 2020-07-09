import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { Subject, Observable } from 'rxjs';
import { CommandItems } from '../model/command-items';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
cartItems:CartItem[]=[];
totalPrice:Subject<number>=new Subject<number>();
totalQuantity:Subject<number>=new Subject<number>();
private baseUrl="http://localhost:8090/api/v1/lignecommandefull";

  constructor(private http: HttpClient) { }

  decrementQuantity(cartItem: CartItem) {
    cartItem.quantity--; 
    if(cartItem.quantity===0){
      this.remove(cartItem);
    }else{
    this.calculateTotalPrice(); }}
  addToCart(theCartItem: CartItem){
    //chek whether the item is already in the cart
    let alreadyExistInCart:boolean;
    let existingCartItem:CartItem=undefined;
    if (this.cartItems.length>0){
     existingCartItem= this.cartItems.find(tempCartItem=>tempCartItem.id ===theCartItem.id)
    
    
    
    alreadyExistInCart  =(existingCartItem!=undefined)
  }
  if (alreadyExistInCart){
    existingCartItem.quantity++;}
    else{
      this.cartItems.push(theCartItem);
    }
   this.calculateTotalPrice();

  }
calculateTotalPrice() {
let totalePriceValue:number=0;
let totaleQuantityValue:number=0;
for(let currentCartItem of this.cartItems){
  totalePriceValue+=currentCartItem.quantity*currentCartItem.unitPrice;
  totaleQuantityValue+=currentCartItem.quantity;

}
console.log(`prix totale : ${totalePriceValue}, quantité totale : ${totaleQuantityValue}`);

//publish the event
this.totalPrice.next(totalePriceValue);
this.totalQuantity.next(totaleQuantityValue);


  }



  remove(cartitem:CartItem){
    const itemIndex= this.cartItems.findIndex((tempCartItem) => tempCartItem.id===cartitem.id);
   if(itemIndex>-1){
     this.cartItems.splice(itemIndex,1);
     this.calculateTotalPrice();
     }
   }
   confirmcmd(cmd:CommandItems):Observable<Object>{
    console.log("commande a envoyé:",cmd)
   
    return this.http.post(`${this.baseUrl}`,cmd);
   

   }
}
