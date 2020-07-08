import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-detail-prod-admin',
  templateUrl: './detail-prod-admin.component.html',
  styleUrls: ['./detail-prod-admin.component.css']
})
export class DetailProdAdminComponent implements OnInit {
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
