import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detailprod-acceuil',
  templateUrl: './detailprod-acceuil.component.html',
  styleUrls: ['./detailprod-acceuil.component.css']
})
export class DetailprodAcceuilComponent implements OnInit {
  produit: Produit=new Produit;

  constructor(private cltservice: ClientService,private activatedRoutr: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    this.activatedRoutr.paramMap.subscribe(
()=>{
  this.getProductInfo();
}


    )
  }
  deconnect(){
    this.cltservice.logout();

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

}
