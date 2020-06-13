import { Produit } from './produit';

export class CartItem {
id:String;
name:String;
imageUrl:String;
unitPrice:number;
quantity: number;

constructor(produit:Produit){
    this.id=produit.idProduit;
    this.name=produit.nomProduit;
    this.imageUrl=produit.urlImage_produit;
    this.unitPrice=produit.prixProduit;
    this.quantity=1;

}
}
