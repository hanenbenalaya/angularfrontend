import { CartItem } from './cart-item'
import { Prod } from './prod';

export class CommandItems {
    clt_id:number
    mnt_tot:number
    product_list:Prod[]=[]
 
    constructor(){

       this.mnt_tot=0;
      this.clt_id=0;
     }
    }


