import { CartItem } from './cart-item';

export class Prod {
    id:number;
    quantite:number;
    prixtotale:number;
    constructor(carte: CartItem){
        this.id=carte.id
        this.quantite=carte.quantity
        this.prixtotale=carte.unitPrice*this.quantite;
    }
}
