import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-client-liste',
  templateUrl: './client-liste.component.html',
  styleUrls: ['./client-liste.component.css']
})
export class ClientListeComponent implements OnInit {

  clients:Client[];

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.ListClients();
  }
  ListClients(){
    this.clientService.getClients().subscribe(
      data =>this.clients=data
    )
  }

}
