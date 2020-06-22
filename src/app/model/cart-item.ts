import { Produit } from './produit';

export class CartItem {
id:number;//
name:String;
imageUrl:String;
unitPrice:number;
quantity: number;//

constructor(id:number,name:String,imageUrl:String,unitPrice:number){

    this.id=id
    this.name=name;
    this.imageUrl=imageUrl;
    this.unitPrice=unitPrice;
    this.quantity=1;

}
}
