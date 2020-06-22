import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/model/client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-liste',
  templateUrl: './client-liste.component.html',
  styleUrls: ['./client-liste.component.css']
})
export class ClientListeComponent implements OnInit {

  clients:Client[];
  numpage:number=1;

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.ListClients(this.numpage);
    console.log("page a recevoir:",this.numpage)
  }
  ListClients(n: number){
    this.clientService.getClients(n).subscribe(
      data =>this.clients=data);
    console.log("resultat",this.clients);
  }

}
