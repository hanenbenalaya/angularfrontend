import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {
  constructor(private cltservice: ClientService){}
    

  ngOnInit() {
   
  }
  deconnect(){
    this.cltservice.logout();

  }
  
}
